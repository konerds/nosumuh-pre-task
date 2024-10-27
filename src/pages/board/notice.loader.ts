import { json } from 'react-router-dom';

export async function loader() {
  const rMetadata = await fetch(`/api/metadata/board.json`);
  const rBoard = await fetch(`/api/board/notice.json`);
  if (!rMetadata.ok || !rBoard.ok) {
    throw json({ message: 'Failed to fetch notice posts...' }, { status: 500 });
  } else {
    return {
      rMetadata: await rMetadata.json(),
      rBoard: await rBoard.json(),
    };
  }
}
