import React from "react"

import github from '../images/icons8-github.svg'
import discord from '../images/icons8-discord.svg'
import gitlab from '../images/icons8-gitlab.svg'
import google from '../images/icons8-google.svg'
import stackoverflow from '../images/icons8-stack-overflow.svg'
import xbox from '../images/icons8-xbox.svg'
import linkedin from '../images/icons8-linkedin.svg'
import replit from '../images/icons8-replit.svg'

import up from '../images/icon-up.svg'


export default function Overview() {
  return (
    <>
      <h2 className="max-w-7xl mx-auto text-slate-600 dark:text-white font-bold mb-5 text-2xl md:text-3xl">
        Other - Links
      </h2>
      <section className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              GitHub
            </li>
            <li>
              <a href="https://github.com/animeshmaiti" target="blank">
              <img src={github} alt="github" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              GitHub Repository
            </div>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              GitLab
            </li>
            <li>
              <a href="https://gitlab.com/AnimeshMaiti" target="blank">
              <img src={gitlab} alt="gitlab" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              GitLab Works
            </div>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Google Developer
            </li>
            <li>
              <a href="https://g.dev/Animesh07" target="blank">
              <img src={google} alt="Facebook" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              Android Studio Projects
            </div>
        </article>
        
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              StackOverFlow
            </li>
            <li>
              <a href="https://stackoverflow.com/users/18105925/animeshmaiti" target="blank">
              <img src={stackoverflow} alt="stackover" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              StackOverFlow Community
            </div>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Repl.it
            </li>
            <li>
              <a href="https://replit.com/@animeshmaiti" target="blank">
              <img src={replit} alt="replit" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              Cloud Base Compiler
            </div>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Discord
            </li>
            <li>
              <a href="https://discordapp.com/users/714329492968964147" target="blank">
              <img src={discord} alt="Facebook" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              Discord Server Community
            </div>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              LinkedIn
            </li>
            <li>
              <a href="https://www.linkedin.com/in/animesh-maiti-3a2164171/" target="blank">
              <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              Connect With LinkedIn
            </div>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-between mb-5">
            <li className="text-slate-600 font-bold dark:text-slate-400">
              Xbox
            </li>
            <li>
              <a href="https://live.xbox.com/Profile?Gamertag=OpTimaSPrime799" target="blank">
              <img src={xbox} alt="xbox" />
              </a>
            </li>
          </ul>
            <div className="flex items-center justify-center text-emerald-600 font-bold text-sm">
              <img src={up} alt="" className="w-3 mr-2" />
              Play Games With Xbox Platform 
            </div>
        </article>
      </section>
    </>
  )
}
// https://live.xbox.com/Profile?Gamertag=OpTimaSPrime799
