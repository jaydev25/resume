import { WebSocketHandler } from '@/lib/websocket-server';
import { createServer } from 'http';
import { NextResponse } from 'next/server';

const server = createServer();
const wsHandler = new WebSocketHandler(server);

export function GET(req: Request) {
  const upgrade = req.headers.get('upgrade');
  const connection = req.headers.get('connection');

  if (upgrade !== 'websocket' || connection?.toLowerCase() !== 'upgrade') {
    return new NextResponse('Invalid WebSocket upgrade', { status: 400 });
  }

  try {
    // @ts-ignore - headers type mismatch
    wsHandler.handleUpgrade(req, req.socket, Buffer.from([]));
    return new NextResponse(null, { status: 101 });
  } catch (err) {
    console.error('WebSocket upgrade failed:', err);
    return new NextResponse('WebSocket upgrade failed', { status: 500 });
  }
}
