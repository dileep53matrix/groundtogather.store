
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
const DATA=path.join(process.cwd(),'data','subscriptions.json');
function read(){return JSON.parse(fs.readFileSync(DATA,'utf8'));}
function write(d){fs.writeFileSync(DATA,JSON.stringify(d,null,2));}
export async function GET(){return NextResponse.json(read());}
export async function POST(req){
 const body=await req.json();
 const subs=read();
 const id='sub_'+Math.random().toString(36).slice(2,9);
 const newSub={id,planId:body.planId,userName:body.userName||'Demo User',apartmentId:body.apartmentId,address:body.address||'',slot:body.slot||'07:00-09:00',status:'active',startDate:new Date().toISOString()};
 subs.push(newSub);write(subs);return NextResponse.json(newSub);
}
