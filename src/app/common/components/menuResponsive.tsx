'use client';
import '../styles/menuResponsive.css'

    export const MenuResponsive = (props:any) => {
    return (   
    <div className=" st-2 st-sticky-share-buttons st-left st-toggleable st-has-labels hidden ">
    <a className="st-btn st-first m-auto" data-network="whatsapp" href="/personajes/listado">
    <svg
    className="h-5 w-5 text-gray-500 dark:text-gray-400  m-auto "
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
</svg>
      <div className="st-label">Characters</div>
    </a>

    <a className="st-btn m-auto" data-network="whatsapp" href="/episodios/listado">
    <svg
    className="h-5 w-5 text-gray-500 dark:text-gray-400  m-auto "
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>

<g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 4)"/>

<path d="m13.5 12.5v-6c0-1.1045695-.8954305-2-2-2h-9c-1.1045695 0-2 .8954305-2 2v6c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2z"/>

<path d="m15.5 12.5v-6.99481259c0-1.65685425-1.3431458-3-3-3-.0017276 0-.0034553 0-.0051829 0l-8.9948171.01554432"/>

<path d="m17.5 10.5v-5.99308345c0-2.209139-1.790861-4-4-4-.0023035 0-.004607 0-.0069106 0l-7.9930894.01381519"/>      </svg>
      <div className="st-label">Episodes</div>
    </a>
</div>);};