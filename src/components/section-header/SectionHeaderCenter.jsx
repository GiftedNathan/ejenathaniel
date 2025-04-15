import React from 'react'
import './sectionHeader.css'

export const SectionHeaderCenter = ({ title, subtitle, note, profileImage, paddingValue }) => {
    return (
        <div className="section-header-center roll-in-left " style={{ padding: paddingValue, }}>
            <h3 className="title ">#{title}</h3>
            <h2 className="subtitle text-gradient">{subtitle}</h2>
            <div className="">{profileImage}</div>
            <p className="note">{note}</p>
        </div>
    )
}

SectionHeaderCenter.defaultProps = {
    title: 'some title',
    subtitle: 'a subtitle',
    note: 'a simple note to explain what the section is all about',
    profileImage: null,
}
