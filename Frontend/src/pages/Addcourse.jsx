import React from 'react'
import '../styles/Addcourse.css'

const Addcourse = () => {
  return (
    
    <div className="form-container">
        <form>
            <h2 className="form-title">Add Course</h2>

            <div className="form-group">
                <label className="form-label">Course Name</label>
                <input type="text" id="title" name="title" className="form-input" placeholder="e.g. Certified Blockchain Associate" required />
            </div>

            <div className="form-group">
                <label className="form-label">Course Id</label>
                <input type="text" id="courseId" name="courseId" className="form-input" placeholder="e.g. 1" required />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="type">Course Type</label>
                <select id="type" name="type" className="form-select" required>
                    <option value="Self-Paced">Self-Paced</option>
                    <option value="Instructor-Led">Instructor-Led</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="description">Description</label>
                <textarea id="description" name="description" className="form-textarea" rows="4" placeholder="Small description of the course"></textarea>
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="price">Price</label>
                <select id="price" name="price" className="form-select" required>
                    <option value="Rs.5000">Rs.5000</option>
                    <option value="Rs.3500">Rs.3500</option>
                    <option value="Rs.15000">Rs.15000</option>
                </select>
            </div>

            <div>
                <button className="form-button" type="submit">Add Course</button>
            </div>
        </form>
    </div>
  )
}

export default Addcourse
