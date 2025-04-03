import doctorModel from "../models/doctorModel.js";

export const changeAvailability = async(req,res)=>{
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docData,{
      available: !docData.available
    })
    res.json({success:true, message:"Availability Changed"})
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: error.message || "Server error" });
  }
}

export const doctorList = async(req,res) => {
  try {
    const doctors = await doctorModel.find({}).select(['-password','-email']);
    res.json({success:true, doctors})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}