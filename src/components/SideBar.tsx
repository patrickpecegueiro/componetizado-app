import { useEffect, useState } from 'react';
import { Button } from './Button';
import { api } from '../services/api';
import '../styles/sidebar.scss';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps {
  genres: GenreResponseProps[],
  genderID: number;
  setGenderID(id: number): void;

}
export function SideBar({genres, genderID, setGenderID}: SideBarProps) {

  function handleClickButton(id: number) {
    setGenderID(id);
  }
  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genderID === genre.id}
            />
          ))}
        </div>

      </nav>
  )

}