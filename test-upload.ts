import { getPayload } from 'payload';
import config from './src/payload.config';
import path from 'path';
import fs from 'fs';

async function test() {
  console.log('Starting test...');
  try {
    const payload = await getPayload({ config });
    const dummy = path.join(process.cwd(), 'dummy.txt');
    fs.writeFileSync(dummy, 'hello');
    console.log('Uploading...');
    const result = await payload.create({
      collection: 'media',
      data: { alt: 'test' },
      file: {
        data: fs.readFileSync(dummy),
        mimetype: 'text/plain',
        name: 'dummy.txt',
        size: 5
      }
    });
    console.log('SUCCESS:', result);
    fs.unlinkSync(dummy);
  } catch (e) {
    console.error('ERROR STACK:', e);
  }
  process.exit(0);
}
test();
