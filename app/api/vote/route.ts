import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'votes.json');

// Helper to read votes
function getVotes() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, JSON.stringify({}));
            return {};
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading votes:', error);
        return {};
    }
}

// Helper to save votes
function saveVotes(votes: any) {
    try {
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(DATA_FILE, JSON.stringify(votes, null, 2));
    } catch (error) {
        console.error('Error saving votes:', error);
    }
}

export async function GET() {
    const votes = getVotes();
    return NextResponse.json(votes);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firmId, type } = body;

        if (!firmId || !['like', 'dislike'].includes(type)) {
            return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
        }

        const votes = getVotes();

        if (!votes[firmId]) {
            votes[firmId] = { likes: 0, dislikes: 0 };
        }

        if (type === 'like') {
            votes[firmId].likes += 1;
        } else {
            votes[firmId].dislikes += 1;
        }

        saveVotes(votes);

        return NextResponse.json(votes[firmId]);
    } catch (error) {
        console.error('Error processing vote:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
