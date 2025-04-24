import conf from "../conf/conf.js";
import{Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
  client= new Client();
     Databases;
     Bucket;

     constructor(){
      this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteprojectId);
      this.databases=new Databases(this.client);
      this.Bucket= new Storage(this.client);
     }
     async createPost ({title,slug,content,featuredImage,status,userId}){
try {
 return await this.databases.createDocument(
             conf.appwritedatabaseId,
             conf.appwritecollectionId,
             slug,
             {title,
              status,
              featuredImage,
              content,
              userId
            }
  )
} catch (error) {
  console.log("appwrite service :: createpost :: error",error);
}
     }

 async updatePost(slug,{title,content,featuredImage,status}){
  try {
   return await this.databases.updateDocument(
    conf.appwritedatabaseId,
    conf.appwritecollectionId,
    slug,
    {
      title,
      content,
      featuredImage,
      status,
    }
   )
    
  } catch (error) {
    console.log("appwrite service :: updatepost :: error",error);
  }
 } 
 
 async deletePost(slug){
 try {
   await this.databases.deleteDocument(
    conf.appwritedatabaseId,
    conf.appwritecollectionId,
    slug
  ) 
  return true
  
 } catch (error) {
  console.log("appwrite service :: deletepost :: error",error);
  return false
 } 
 }

 async getPost (slug){
try {
  return await this.databases.getDocument(
    conf.appwritedatabaseId,
    conf.appwritecollectionId,
    slug
  )
  
} catch (error) {
  console.log("appwrite service :: getpost :: error",error);
  return false
}
 }

 async getPosts (queries=[Query.equal("status","active" )]){
  try {
    return await this.databases.listDocuments(
       conf.appwritedatabaseId,
       conf.appwritecollectionId,
       queries,
    )
  } catch (error) {
    console.log("appwrite service :: getposts :: error",error);
  return false
  }
 }

 // FILE UPLOAD SERVICE

 async uploadFile(file){
  try {
return await this.Bucket.createFile(
   conf.appwritebucketId,
   ID.unique(),
    file
)   
  } catch (error) {
    console.log("appwrite service :: uploadFile :: error",error);
  return false
  }
 }

 async deleteFile(fileId){
  try {
    await this.Bucket.deleteFile(
      conf.appwritebucketId,
      fileId
    )
     return true 
  } catch (error) {
    console.log("appwrite service :: deleteFile :: error",error);
  return false
  }
 }

 getFilePreview(fileId){
 return this.Bucket.getFileView(
    conf.appwritebucketId,
    fileId
  )
 }
}
const service =new Service()
export default service