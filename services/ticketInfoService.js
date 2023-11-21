const TicketInfo = require("../models/ticketInfo");

const get_all_ticketInfo = async () => {
  try {
    const result = await TicketInfo.find().sort({ createdAt: -1 });
    return result;
  } catch (error) {
    return error;
  }
};

const get_ticketInfo_by_id = async (ticketInfoId) => {
  try {
    const result = await TicketInfo.findById(ticketInfoId);
    return result;
  } catch (error) {
    return error;
  }
};

const add_ticketInfo = async (ticketInfoData) => {
  const ticketInfo = new TicketInfo(ticketInfoData);
  try {
    const result = await ticketInfo.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  get_all_ticketInfo,
  get_ticketInfo_by_id,
  add_ticketInfo,
};