import { NextResponse } from 'next/server'

// export async function GET(request: Request) {
//   //
// }

export async function POST(request: Request) {
  console.log(233)
  const data = await request.json()
  return NextResponse.json({
    code: 0,
    message: '添加成功',
    data
  })
}
