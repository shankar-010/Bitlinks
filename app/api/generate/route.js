import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()
  console.log(body)
  const client = await clientPromise;
  const db = client.db("bitlinks")
  const collection = db.collection("url")

 const doc = await collection.findOne({shorturl: body.shorturl})
 if(doc){
  return Response.json({success: false, message: 'URL already exists'})
 }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  })
    return Response.json({success: true, error:false, message: 'URL Generated Successfully' })
  }

// import clientPromise from "@/lib/mongodb";

// export async function POST(request) {
//   try {
//     // Parse the request body
//     const body = await request.json();

//     // Connect to MongoDB
//     const client = await clientPromise;
//     const db = client.db("bitlinks");
//     const collection = db.collection("url");

//     // Insert the document into the collection
//     const result = await collection.insertOne({
//       url: body.url,
//       shorturl: body.shorturl,
//     });

//     // Respond with success
//     return new Response(
//       JSON.stringify({ success: true, error: false, message: 'URL Generated Successfully', result }),
//       {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   } catch (error) {
//     console.error("Error in POST handler:", error);
//     // Respond with an error message
//     return new Response(
//       JSON.stringify({ success: false, error: true, message: error.message }),
//       {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   }
// }
