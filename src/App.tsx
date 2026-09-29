import { useState, useEffect } from 'react'

// ─── Pixel Tank SVG Components ───────────────────────────────────────────────

function PlayerTank({ size = 64, color = '#f7c948', dir = 'up' }: { size?: number; color?: string; dir?: 'up' | 'down' | 'left' | 'right' }) {
  const rotate = { up: 0, right: 90, down: 180, left: 270 }[dir]
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <g transform={`rotate(${rotate}, 8, 8)`}>
        {/* barrel */}
        <rect x="7" y="0" width="2" height="5" fill={color} />
        {/* turret */}
        <rect x="5" y="4" width="6" height="5" fill={color} />
        {/* body */}
        <rect x="2" y="7" width="12" height="6" fill={color} />
        {/* left track */}
        <rect x="0" y="5" width="3" height="9" fill={color} />
        <rect x="0" y="5" width="3" height="1" fill="#000" opacity="0.4" />
        <rect x="0" y="8" width="3" height="1" fill="#000" opacity="0.4" />
        <rect x="0" y="11" width="3" height="1" fill="#000" opacity="0.4" />
        {/* right track */}
        <rect x="13" y="5" width="3" height="9" fill={color} />
        <rect x="13" y="5" width="3" height="1" fill="#000" opacity="0.4" />
        <rect x="13" y="8" width="3" height="1" fill="#000" opacity="0.4" />
        <rect x="13" y="11" width="3" height="1" fill="#000" opacity="0.4" />
      </g>
    </svg>
  )
}

function EnemyTank({ size = 64, color = '#c0c0c0', dot = false }: { size?: number; color?: string; dot?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* barrel pointing down */}
      <rect x="7" y="11" width="2" height="5" fill={color} />
      {/* turret */}
      <rect x="5" y="7" width="6" height="5" fill={color} />
      {dot && <rect x="7" y="9" width="2" height="2" fill="#e83030" />}
      {/* body */}
      <rect x="2" y="3" width="12" height="6" fill={color} />
      {/* tracks */}
      <rect x="0" y="2" width="3" height="9" fill={color} />
      <rect x="0" y="2" width="3" height="1" fill="#000" opacity="0.4" />
      <rect x="0" y="5" width="3" height="1" fill="#000" opacity="0.4" />
      <rect x="0" y="8" width="3" height="1" fill="#000" opacity="0.4" />
      <rect x="13" y="2" width="3" height="9" fill={color} />
      <rect x="13" y="2" width="3" height="1" fill="#000" opacity="0.4" />
      <rect x="13" y="5" width="3" height="1" fill="#000" opacity="0.4" />
      <rect x="13" y="8" width="3" height="1" fill="#000" opacity="0.4" />
    </svg>
  )
}

function Eagle() {
  return (
    <svg width="48" height="48" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="0" width="8" height="2" fill="#e83030" />
      <rect x="2" y="2" width="12" height="2" fill="#e83030" />
      <rect x="0" y="4" width="16" height="8" fill="#e83030" />
      <rect x="2" y="12" width="12" height="2" fill="#e83030" />
      <rect x="4" y="14" width="8" height="2" fill="#e83030" />
      {/* cross */}
      <rect x="7" y="5" width="2" height="6" fill="#000" />
      <rect x="4" y="8" width="8" height="2" fill="#000" />
    </svg>
  )
}

function BrickWall() {
  return (
    <svg width="32" height="32" viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
      <rect x="0" y="0" width="8" height="8" fill="#c84c00" />
      <rect x="0" y="0" width="4" height="3" fill="#e06020" />
      <rect x="4" y="0" width="4" height="3" fill="#e06020" />
      <rect x="2" y="4" width="4" height="3" fill="#e06020" />
      <rect x="0" y="4" width="2" height="3" fill="#e06020" />
      <rect x="6" y="4" width="2" height="3" fill="#e06020" />
      <rect x="0" y="3" width="8" height="1" fill="#000" opacity="0.3" />
      <rect x="0" y="7" width="8" height="1" fill="#000" opacity="0.3" />
      <rect x="4" y="0" width="1" height="3" fill="#000" opacity="0.3" />
      <rect x="2" y="4" width="1" height="3" fill="#000" opacity="0.3" />
    </svg>
  )
}

function SteelWall() {
  return (
    <svg width="32" height="32" viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
      <rect x="0" y="0" width="8" height="8" fill="#606090" />
      <rect x="0" y="0" width="4" height="3" fill="#9090c0" />
      <rect x="4" y="4" width="4" height="3" fill="#9090c0" />
      <rect x="4" y="0" width="4" height="3" fill="#707090" />
      <rect x="0" y="4" width="4" height="3" fill="#707090" />
    </svg>
  )
}

function Star() {
  return (
    <svg width="32" height="32" viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
      <rect x="3" y="0" width="2" height="8" fill="#f7c948" />
      <rect x="0" y="3" width="8" height="2" fill="#f7c948" />
      <rect x="1" y="1" width="2" height="2" fill="#f7c948" />
      <rect x="5" y="1" width="2" height="2" fill="#f7c948" />
      <rect x="1" y="5" width="2" height="2" fill="#f7c948" />
      <rect x="5" y="5" width="2" height="2" fill="#f7c948" />
    </svg>
  )
}

// ─── Animated Pixel Battle Scene ─────────────────────────────────────────────

function BattleScene() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick(n => n + 1), 200)
    return () => clearInterval(t)
  }, [])
  const bulletY = ((tick * 8) % 80)
  return (
    <div className="relative w-48 h-48 mx-auto" style={{ imageRendering: 'pixelated' }}>
      {/* Ground grid */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(#4cde4c 0 1px, transparent 1px 16px), repeating-linear-gradient(90deg, #4cde4c 0 1px, transparent 1px 16px)' }} />

      {/* Player tank */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2" style={{ animation: 'tank-move 1.2s ease-in-out infinite' }}>
        <PlayerTank size={56} />
      </div>

      {/* Bullet */}
      <div className="absolute left-1/2 w-2 h-3 bg-[#f7c948]"
        style={{ bottom: `${60 + bulletY}px`, marginLeft: '-2px', opacity: bulletY > 60 ? 0 : 1 }} />

      {/* Enemy tank */}
      <div className="absolute top-2 right-4" style={{ animation: tick % 4 < 2 ? 'none' : 'none' }}>
        <EnemyTank size={48} color={tick % 6 < 3 ? '#c0c0c0' : '#aaaaaa'} />
      </div>

      {/* Explosion if bullet reaches enemy */}
      {bulletY > 55 && (
        <div className="absolute top-4 right-4 text-2xl" style={{ imageRendering: 'pixelated' }}>
          💥
        </div>
      )}

      {/* Brick walls */}
      <div className="absolute bottom-16 left-4 opacity-80"><BrickWall /></div>
      <div className="absolute bottom-16 right-8 opacity-80"><BrickWall /></div>

      {/* Eagle base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Eagle />
      </div>
    </div>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero() {
  const [lives] = useState(3)
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 bg-[#000]">
      {/* Score bar */}
      <div className="absolute top-0 left-0 right-0 bg-[#7b5500] py-2 px-4 flex justify-between text-xs text-[#f7c948]">
        <span>1号</span>
        <span>00000</span>
        <span>最高分</span>
        <span>20000</span>
        <span>2号</span>
        <span>00000</span>
      </div>

      {/* Title */}
      <div className="text-center mb-10 mt-8">
        <h1 className="text-[#f7c948] leading-none mb-4 glow-pulse"
          style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)', fontFamily: 'Press Start 2P', letterSpacing: '0.05em' }}>
          坦克大战
        </h1>
        <p className="text-[#e8e8e8] text-xs mt-3" style={{ letterSpacing: '0.2em' }}>BATTLE CITY 1985</p>
      </div>

      {/* Animated scene */}
      <BattleScene />

      {/* CTA */}
      <div className="mt-10 text-center space-y-4">
        <a href="#tanks" className="inline-block px-8 py-3 bg-[#f7c948] text-black text-xs hover:bg-white transition-colors" style={{ letterSpacing: '0.15em' }}>
          立即体验
        </a>
      </div>

      {/* Lives */}
      <div className="mt-8 flex items-center gap-3">
        {Array.from({ length: lives }).map((_, i) => (
          <PlayerTank key={i} size={24} />
        ))}
        <span className="text-[#e8e8e8] text-xs ml-2">{lives}P</span>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-12 left-0 right-0 overflow-hidden border-t border-b border-[#333] py-2">
        <p className="whitespace-nowrap text-[#4cde4c] text-xs"
          style={{ animation: 'marquee 18s linear infinite', letterSpacing: '0.2em' }}>
          ★ 坦克大战 ★ 经典300合1游戏 ★ 1985年 ★ 保卫基地 消灭敌人 ★ 一号机 二号机 双人合作 ★ 第01关 ★ 奖励关卡 ★ 共消灭20辆坦克 ★
        </p>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#888] text-xs blink">▼</div>
    </section>
  )
}

const TANK_TYPES = [
  {
    label: '普通型',
    zh: 'BASIC',
    color: '#c0c0c0',
    dot: false,
    hp: 1,
    speed: '普通',
    bullet: '普通',
    points: 100,
    desc: '最常见的敌方坦克，速度和火力均为普通水平。一炮即可摧毁。',
  },
  {
    label: '快速型',
    zh: 'FAST',
    color: '#c0c0c0',
    dot: false,
    hp: 1,
    speed: '极快',
    bullet: '普通',
    points: 200,
    desc: '移动速度极快，难以瞄准。但防御力与基本型相同，一炮可摧毁。',
  },
  {
    label: '强力型',
    zh: 'POWER',
    color: '#c0c0c0',
    dot: false,
    hp: 1,
    speed: '普通',
    bullet: '高速',
    points: 300,
    desc: '子弹速度更快，可以穿透砖墙，对玩家威胁极大，需优先消灭。',
  },
  {
    label: '装甲型',
    zh: 'ARMOR',
    color: '#4cde4c',
    dot: true,
    hp: 4,
    speed: '缓慢',
    bullet: '普通',
    points: 400,
    desc: '最强的敌方坦克，需要四次命中才能摧毁。每次命中后颜色变化。',
  },
]

function TankTypes() {
  const [active, setActive] = useState(0)
  const t = TANK_TYPES[active]
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    setFlash(true)
    const to = setTimeout(() => setFlash(false), 100)
    return () => clearTimeout(to)
  }, [active])

  return (
    <section id="tanks" className="py-20 px-4 bg-[#000] border-t-4 border-[#333]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4cde4c] text-xs mb-4" style={{ letterSpacing: '0.3em' }}>── 敌方坦克 ──</p>
          <h2 className="text-[#f7c948] text-xl" style={{ letterSpacing: '0.1em' }}>坦克图鉴</h2>
        </div>

        {/* Type selector */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {TANK_TYPES.map((type, i) => (
            <button
              key={type.label}
              onClick={() => setActive(i)}
              className={`py-3 px-2 text-center transition-none ${
                active === i
                  ? 'bg-[#f7c948] text-black'
                  : 'border-2 border-[#444] text-[#888] hover:border-[#f7c948] hover:text-[#f7c948]'
              }`}
              style={{ fontSize: '8px', letterSpacing: '0.1em' }}
            >
              <div className="flex justify-center mb-1">
                <EnemyTank size={28} color={active === i ? '#000' : type.color} />
              </div>
              {type.label}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className={`border-4 border-[#555] bg-[#0a0a0a] p-6 transition-opacity ${flash ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center">
              <EnemyTank size={96} color={t.color} dot={t.dot} />
              <p className="text-[#f7c948] text-sm mt-4" style={{ letterSpacing: '0.15em' }}>{t.label}</p>
              <p className="text-[#888] text-xs mt-1">{t.zh}</p>
              <div className="mt-4 px-4 py-2 bg-[#f7c948] text-black text-xs" style={{ letterSpacing: '0.1em' }}>
                +{t.points} 分
              </div>
            </div>
            <div className="space-y-4">
              {[
                { k: '耐久', v: '★'.repeat(t.hp) + '☆'.repeat(4 - t.hp) },
                { k: '速度', v: t.speed },
                { k: '子弹', v: t.bullet },
                { k: '得分', v: `${t.points} 分` },
              ].map(row => (
                <div key={row.k} className="flex items-baseline gap-4 border-b border-[#222] pb-3">
                  <span className="text-[#888] text-xs w-16 shrink-0" style={{ letterSpacing: '0.1em' }}>{row.k}</span>
                  <span className="text-[#e8e8e8] text-xs" style={{ letterSpacing: '0.05em' }}>{row.v}</span>
                </div>
              ))}
              <p className="text-[#888] text-xs leading-relaxed pt-2" style={{ lineHeight: '2' }}>{t.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const POWERUPS = [
  { icon: <Star />, name: '★ 升级', zh: 'STAR', desc: '强化你的坦克！连续获得可提升射速和子弹速度，最多可升级3次。', color: '#f7c948' },
  { icon: <span style={{ fontSize: 28 }}>🪖</span>, name: '钢盔 无敌', zh: 'HELMET', desc: '获得短暂无敌状态，在此期间不受任何敌方攻击的伤害。', color: '#4cde4c' },
  { icon: <span style={{ fontSize: 28 }}>💣</span>, name: '炸弹 清屏', zh: 'GRENADE', desc: '立刻消灭屏幕上所有可见的敌方坦克，紧急时刻的救命道具。', color: '#e83030' },
  { icon: <span style={{ fontSize: 28 }}>⏰</span>, name: '时钟 冻结', zh: 'CLOCK', desc: '暂时冻结所有敌方坦克，让你可以从容消灭它们。', color: '#9090c0' },
  { icon: <span style={{ fontSize: 28 }}>🔧</span>, name: '铲子 加固', zh: 'SHOVEL', desc: '将基地周围的砖墙临时变为钢墙，提供更坚固的防护。', color: '#c84c00' },
  { icon: <span style={{ fontSize: 28 }}>❤️</span>, name: '生命 +1', zh: '1UP', desc: '增加一条生命。在局势不利时最为珍贵的道具。', color: '#e83030' },
]

function Powerups() {
  return (
    <section id="powerups" className="py-20 px-4 bg-[#060606] border-t-4 border-[#333]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4cde4c] text-xs mb-4" style={{ letterSpacing: '0.3em' }}>── 道具 ──</p>
          <h2 className="text-[#f7c948] text-xl" style={{ letterSpacing: '0.1em' }}>道具大全</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {POWERUPS.map(p => (
            <div key={p.name}
              className="border-2 border-[#333] bg-[#0a0a0a] p-4 hover:border-[#f7c948] transition-colors group cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#333] group-hover:border-[#f7c948]"
                  style={{ color: p.color }}>
                  {p.icon}
                </div>
                <div>
                  <p className="text-[#f7c948]" style={{ letterSpacing: '0.05em', fontSize: '8px' }}>{p.name}</p>
                  <p className="text-[#555] mt-1" style={{ fontSize: '7px', letterSpacing: '0.05em' }}>{p.zh}</p>
                </div>
              </div>
              <p className="text-[#666] leading-relaxed" style={{ fontSize: '7px', lineHeight: '2.2' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowToPlay() {
  return (
    <section id="howto" className="py-20 px-4 bg-[#000] border-t-4 border-[#333]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4cde4c] text-xs mb-4" style={{ letterSpacing: '0.3em' }}>── 游戏说明 ──</p>
          <h2 className="text-[#f7c948] text-xl" style={{ letterSpacing: '0.1em' }}>操作指南</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="border-4 border-[#555] p-6">
            <p className="text-[#4cde4c] text-xs mb-6" style={{ letterSpacing: '0.2em' }}>— 按键操作 —</p>
            <div className="space-y-3">
              {[
                { k: '↑ ↓ ← →', v: '移动坦克' },
                { k: '空格 / A键', v: '发射子弹' },
                { k: '开始键', v: '开始 / 暂停' },
                { k: '选择键', v: '切换模式' },
              ].map(r => (
                <div key={r.k} className="flex justify-between items-center border-b border-[#222] pb-2">
                  <span className="text-[#f7c948] bg-[#222] px-2 py-1" style={{ fontSize: '8px', letterSpacing: '0.05em' }}>{r.k}</span>
                  <span className="text-[#888]" style={{ fontSize: '8px' }}>{r.v}</span>
                </div>
              ))}
            </div>

            {/* D-pad visual */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-20 h-20">
                {[
                  { label: '▲', className: 'absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#333] flex items-center justify-center border border-[#555]' },
                  { label: '▼', className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#333] flex items-center justify-center border border-[#555]' },
                  { label: '◀', className: 'absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#333] flex items-center justify-center border border-[#555]' },
                  { label: '▶', className: 'absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#333] flex items-center justify-center border border-[#555]' },
                ].map(b => (
                  <div key={b.label} className={b.className}>
                    <span className="text-[#888]" style={{ fontSize: '8px' }}>{b.label}</span>
                  </div>
                ))}
                <div className="absolute inset-0 m-auto w-6 h-6 bg-[#222]" />
              </div>
            </div>
          </div>

          {/* Rules */}
          <div className="border-4 border-[#555] p-6">
            <p className="text-[#4cde4c] text-xs mb-6" style={{ letterSpacing: '0.2em' }}>— 游戏规则 —</p>

            <div className="space-y-4">
              {[
                { num: '01', rule: '保护屏幕下方的老鹰基地，基地被摧毁则游戏结束。' },
                { num: '02', rule: '每关消灭全部 20 辆敌方坦克才能通关。' },
                { num: '03', rule: '玩家最多有 3 条生命，用完则 GAME OVER。' },
                { num: '04', rule: '支持双人同屏合作，P1 P2 共同守卫基地。' },
                { num: '05', rule: '消灭闪烁的敌方坦克可获得道具，善用道具是通关关键。' },
              ].map(r => (
                <div key={r.num} className="flex gap-4">
                  <span className="text-[#f7c948] shrink-0" style={{ fontSize: '8px' }}>{r.num}</span>
                  <p className="text-[#666] leading-relaxed" style={{ fontSize: '7px', lineHeight: '2.2' }}>{r.rule}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 border-2 border-[#f7c948] border-dashed">
              <div className="flex items-center gap-3">
                <Eagle />
                <div>
                  <p className="text-[#e83030] blink" style={{ fontSize: '8px', letterSpacing: '0.1em' }}>保护基地！</p>
                  <p className="text-[#888] mt-1" style={{ fontSize: '7px' }}>基地被毁 = 游戏结束</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MAP_ELEMENTS = [
  { el: <BrickWall />, name: '砖墙', zh: 'BRICK', desc: '可被普通子弹摧毁，也可被铲子道具加固为钢墙。' },
  { el: <SteelWall />, name: '钢墙', zh: 'STEEL', desc: '普通子弹无法摧毁，只有升级后的坦克才能击穿。' },
  { el: <div className="w-8 h-8 bg-[#004488] border border-[#0066aa]" />, name: '河流', zh: 'WATER', desc: '坦克无法通过，子弹可以飞越，形成天然屏障。' },
  { el: <div className="w-8 h-8 bg-[#006600] border border-[#008800]" />, name: '丛林', zh: 'FOREST', desc: '坦克可以进入但会被遮蔽，形成天然的伏击点。' },
  { el: <div className="w-8 h-8 bg-[#888866] border border-[#aaaa88]" />, name: '冰面', zh: 'ICE', desc: '坦克在冰面上会惯性滑行，操控更加困难。' },
  { el: <Eagle />, name: '老鹰基地', zh: 'EAGLE', desc: '你最重要的守护目标，被摧毁即宣告游戏失败。' },
]

function MapElements() {
  return (
    <section id="map" className="py-20 px-4 bg-[#060606] border-t-4 border-[#333]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4cde4c] text-xs mb-4" style={{ letterSpacing: '0.3em' }}>── 地图元素 ──</p>
          <h2 className="text-[#f7c948] text-xl" style={{ letterSpacing: '0.1em' }}>地形大全</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {MAP_ELEMENTS.map(m => (
            <div key={m.name} className="border-2 border-[#333] bg-[#0a0a0a] p-4 hover:border-[#4cde4c] transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">{m.el}</div>
                <div>
                  <p className="text-[#4cde4c]" style={{ fontSize: '8px', letterSpacing: '0.05em' }}>{m.name}</p>
                  <p className="text-[#555] mt-1" style={{ fontSize: '7px' }}>{m.zh}</p>
                </div>
              </div>
              <p className="text-[#555] leading-relaxed" style={{ fontSize: '7px', lineHeight: '2.2' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SCORES = [
  { rank: 1, name: 'AAA', score: 99900, stage: 35 },
  { rank: 2, name: 'YSK', score: 86400, stage: 30 },
  { rank: 3, name: 'TAK', score: 72000, stage: 25 },
  { rank: 4, name: 'NMC', score: 58500, stage: 21 },
  { rank: 5, name: 'PLR', score: 43200, stage: 16 },
  { rank: 6, name: 'CPU', score: 34800, stage: 13 },
  { rank: 7, name: 'MSY', score: 28100, stage: 10 },
  { rank: 8, name: '---', score: 20000, stage: 7 },
]

function Scoreboard() {
  return (
    <section id="scores" className="py-20 px-4 bg-[#000] border-t-4 border-[#333]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4cde4c] text-xs mb-4" style={{ letterSpacing: '0.3em' }}>── 最高纪录 ──</p>
          <h2 className="text-[#f7c948] text-xl" style={{ letterSpacing: '0.1em' }}>排行榜</h2>
        </div>

        <div className="border-4 border-[#555] bg-[#0a0a0a]">
          {/* Table header */}
          <div className="grid grid-cols-4 border-b-2 border-[#333] px-4 py-3">
            {['名次', '玩家', '得分', '关卡'].map(h => (
              <span key={h} className="text-[#888]" style={{ fontSize: '8px', letterSpacing: '0.15em' }}>{h}</span>
            ))}
          </div>

          {SCORES.map((s, i) => (
            <div key={s.rank}
              className={`grid grid-cols-4 px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#111] transition-colors ${i === 0 ? 'bg-[#0f0a00]' : ''}`}>
              <span className={i === 0 ? 'text-[#f7c948]' : 'text-[#555]'} style={{ fontSize: '8px' }}>
                {String(s.rank).padStart(2, '0')}
              </span>
              <span className={i === 0 ? 'text-[#f7c948] glow-pulse' : 'text-[#888]'} style={{ fontSize: '8px', letterSpacing: '0.2em' }}>
                {s.name}
              </span>
              <span className={i === 0 ? 'text-[#f7c948]' : 'text-[#e8e8e8]'} style={{ fontSize: '8px' }}>
                {s.score.toLocaleString()}
              </span>
              <span className="text-[#4cde4c]" style={{ fontSize: '8px' }}>
                {String(s.stage).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#333] blink" style={{ fontSize: '8px', letterSpacing: '0.1em' }}>
            你的纪录将显示在这里
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t-4 border-[#333] bg-[#060606] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-6">
          <PlayerTank size={32} />
          <Eagle />
          <PlayerTank size={32} color="#4cde4c" dir="right" />
        </div>
        <p className="text-[#f7c948] text-xs" style={{ letterSpacing: '0.1em' }}>坦克大战 BATTLE CITY</p>
        <div className="flex justify-center gap-8 flex-wrap">
          {['坦克图鉴', '道具大全', '操作指南', '地形大全', '排行榜'].map(l => (
            <a key={l} href="#" className="text-[#444] hover:text-[#f7c948] transition-colors" style={{ fontSize: '8px', letterSpacing: '0.1em' }}>{l}</a>
          ))}
        </div>
        <div className="border-t border-[#222] pt-6 space-y-2">
          <p className="text-[#333]" style={{ fontSize: '7px', letterSpacing: '0.1em' }}>
            © 1985 NAMCO 版权所有
          </p>
          <p className="text-[#222]" style={{ fontSize: '7px', letterSpacing: '0.1em' }}>
            300合1 经典游戏卡带 · 致我们逝去的童年
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  ['#tanks', '坦克图鉴'],
  ['#howto', '操作指南'],
  ['#map', '地形大全'],
  ['#scores', '排行榜'],
  ['/privacy/index.html', '隐私协议'],
] as const

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7b5500] border-b-4 border-[#f7c948]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-10">
        <a href="#" className="flex items-center gap-2">
          <PlayerTank size={20} />
          <span className="text-[#f7c948]" style={{ fontSize: '8px', letterSpacing: '0.1em' }}>坦克大战</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(([h, l]) => (
            <a key={h} href={h} className="text-[#f7c948] hover:text-white transition-colors" style={{ fontSize: '7px', letterSpacing: '0.15em' }}>{l}</a>
          ))}
        </div>
        <button className="md:hidden text-[#f7c948]" onClick={() => setOpen(!open)} style={{ fontSize: '8px' }}>
          {open ? '✕' : '≡'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#5a3d00] border-t-2 border-[#f7c948] px-4 py-3 flex flex-col gap-3">
          {NAV_ITEMS.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-[#f7c948]" style={{ fontSize: '8px', letterSpacing: '0.15em' }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#000]" style={{ paddingTop: '40px' }}>
      <Nav />
      <Hero />
      <TankTypes />
      <Powerups />
      <HowToPlay />
      <MapElements />
      <Scoreboard />
      <Footer />
    </div>
  )
}
