# Maintainer: sim
pkgname=ttf-jasonhandwriting
_commit='082307f42ea883bae1a9f0dd22abd26b44ac6054'
pkgver=1.0
pkgrel=7
pkgdesc='An open source Traditional Chinese (Taiwan) fonts created by Jason(Yu Ching Sung)'
arch=('any')
url='https://github.com/jasonhandwriting/JasonHandwriting'
license=('custom:SIL Open Font License')
source=("JasonHandwriting1.ttf::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/JasonHandwriting1.ttf"
        "JasonHandwriting2.ttf::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/JasonHandwriting2.ttf"
        "JasonHandwriting3.ttf::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/JasonHandwriting3.ttf"
        "JasonHandwriting4.ttf::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/JasonHandwriting4.ttf"
        "JasonHandwriting5.ttf::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/JasonHandwriting5.ttf"
	"JasonHandwriting5p.ttf::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/JasonHandwriting5p.ttf"
	"README.md::https://github.com/jasonhandwriting/JasonHandwriting/raw/${_commit}/README.md")
sha256sums=('de76a15b1e2c1a7050d061485e28195f5b682d45e37499cf730c2b8554c44cf3'
            'b67dce349d32e92e4ee7befeb0339d04ca69551bb523e60cfb5ea8f5fbd5d669'
            'f5353c04dbd9f9f4faf1741465aa88ddae55a55455af874971d754b8c1f7cd76'
            '1db91107a80c78e6d04b6d78f86a4b8946f083cb0b41ff5864009c4e1698ee4b'
	    '128c93921d40091c87e38b772455f77ae8864f291141f8ec6115dc57e9fa56eb'
	    '0dc1a2d7fb09a233a22cebc33bf67efc9d7f88009adaa5304c5958d9ec7f746e'
            'cb20f35d0babdffc639b0f27d2fe1f0918158607688be92639fa7195b1a34782'
)

package() {
  install -dm 755 "${pkgdir}/usr/share/fonts/JasonHandwriting"
  install -m 644 JasonHandwriting1.ttf "${pkgdir}/usr/share/fonts/JasonHandwriting/JasonHandwriting1.ttf"
  install -m 644 JasonHandwriting2.ttf "${pkgdir}/usr/share/fonts/JasonHandwriting/JasonHandwriting2.ttf"
  install -m 644 JasonHandwriting3.ttf "${pkgdir}/usr/share/fonts/JasonHandwriting/JasonHandwriting3.ttf"
  install -m 644 JasonHandwriting4.ttf "${pkgdir}/usr/share/fonts/JasonHandwriting/JasonHandwriting4.ttf"
  install -m 644 JasonHandwriting5.ttf "${pkgdir}/usr/share/fonts/JasonHandwriting/JasonHandwriting5.ttf"
  install -m 644 JasonHandwriting5p.ttf "${pkgdir}/usr/share/fonts/JasonHandwriting/JasonHandwriting5p.ttf"
  sed -n '/JasonHandwriting/,/License./p' README.md > LICENSE
  sed -i 1,1d LICENSE
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}
