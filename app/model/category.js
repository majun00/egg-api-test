module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const courseCategorySchema = new Schema({
    name: { // 分类名称
      type: String,
      required: true
    },
    parentId: { // 所属分类
      type: Schema.Types.Mixed, // ObjectId 或 0
      default: 0
    },
    created_at: { // 创建时间
      type: Date,
      default: Date.now
    },
    updated_at: { // 更新时间
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('CourseCategory', courseCategorySchema)
}
