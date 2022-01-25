import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const goodSrc = src.replace('.jpg', '');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            srcSet={`
              ${goodSrc}.avif 1x,
              ${goodSrc}@2x.avif 2x,
              ${goodSrc}@3x.avif 3x
            `}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  overflow: hidden;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  white-space: nowrap;

  &:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
