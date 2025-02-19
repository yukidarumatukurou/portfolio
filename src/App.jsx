import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>

      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
              NisshoCode<br />
              My Portfolio WebSite
            </h1>
            <p className='mb-8 leading-relaxed'>
              現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML,CSS,JavaScript,TypeScript,
              PHP,SQL,ReactなどのWeb全般とPtyhonです。自身が作ったものを公開しておりますので、ぜひ、見に行ってください。
            </p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-green-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium text-green-900'>
              About Me
            </h1>
            <p className='pb-10'>
              これまで、マーケティング業界に数年財務分析を行ってまいりました。現在はIT業界でシステム構築に従事しながら副業としてWebサイト
              やWebAppを個人として受注しています。また、投資やコンサルも積極的に行っており、ご相談されたい方はコンタクトをお待ちしております。
            </p>
            <p>
              以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactびJSやTSで実装しております。また、Ptyhonを
              使ってAIによる株価の予測サイトを構築しました。また、数件の事業所のWebサイトの構築など多岐にわたります。
            </p>
          </div>
          <div className='flex flex-wrap'>
            {/* カードのdivタグ */}
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>
                <div>
                  <p>
                    ReactとJavaScriptでの投稿機能つきのChatアプリ、仕様はReact、JavaScript、html、Css、firebase、AWS
                    ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る → </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0503 5C14.51 5 16.7393 5.98676 18.3638 7.58602L14.1208 11.8291C13.5824 11.3154 12.8531 11 12.0503 11C11.1963 11 10.4256 11.3568 9.87927 11.9295L5.63623 7.68651C7.26871 6.0282 9.53941 5 12.0503 5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.0503 19C13.7071 19 15.0503 17.6569 15.0503 16C15.0503 14.3431 13.7071 13 12.0503 13C10.3934 13 9.05029 14.3431 9.05029 16C9.05029 17.6569 10.3934 19 12.0503 19Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>AI Finance</h2>
                </div>
                <div>
                  <p>
                    AIをつかった株やビットコインのデータの取得、分析、一か月後の予測アプリです。AIはscikit learnの回帰で実装しています。主にPtyhonでコーディングを行い、フレークワークは
                    Storeamlitを使用しています。株や暗号資産の売買にぜひお役立てください。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る → </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>メモ機能</h2>
                </div>
                <div>
                  <p>
                    ReactとJavaScriptでの投稿機能つきのChatアプリ、仕様はReact、JavaScript、html、Css、firebase、AWS
                    ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る → </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex-wrap'>
          {/* left side */}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" className='rounded' alt="" />
          </div>
          {/* rigt side */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
            <div>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{ width: "45%" }}>45%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "55%" }}>55%</div>
              </div>
              <h2>Ptyhon</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{ width: "30%" }}>30%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
