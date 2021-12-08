import React from 'react'
import './sectionHeader.css'

export const SectionHeader = ({title, subtitle, note, profileImage}) => {
    return (
        <div className="section-header">
            <h3 className="title ">#{title}</h3>
            <h2 className="subtitle text-gradient">{subtitle}</h2>
            <div className="">{profileImage}</div>
            <p className="note">{note}</p>
        </div>
    )
}

SectionHeader.defaultProps = {
    title: 'some title',
    subtitle: 'a subtitle',
    note: 'a simple note to explain what the section is all about',
    profileImage: null,
}
