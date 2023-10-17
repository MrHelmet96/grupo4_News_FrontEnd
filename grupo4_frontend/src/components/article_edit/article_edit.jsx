import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8080/article/'

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [content, setContent] = useState('')
  const id = useParams()

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      title: title,
      subtitle: subtitle,
      content: content
    });
  }
  useEffect(() => {
    getBlogById()
  }, [])

  const getBlogById = async () => {
    const res = await axios.get(URI + id)
    setTitle(res.data.title)
    setSubtitle(res.data.subtitle)
    setContent(res.data.content)
  }

  return (
    <div className="col-10">
      <h3>Edit Post</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Subtitle</label>
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            type="text"
            className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Contenido</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )

}

export default EditArticle;