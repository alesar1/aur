# Maintainer Alex Mcmillan <linuxguy93@gmail.com>

pkgname=linvst3-bin
pkgver=1.8.2
pkgrel=1
pkgdesc="enables Windows vst3's to be used as Linux vst's in Linux vst capable DAW's"
arch=('x86_64')
url="https://github.com/osxmidi/LinVst3"
groups=('pro-audio')
depends=('wine' 'freetype2' 'xcb-util' 'xcb-util-cursor' 'xcb-util-keysyms' 'libxkbcommon-x11' 'libx11' 'expat' 'gtkmm3' 'sqlite')
replaces=('linvst3')
conflicts=('linvst3')
provides=('linvst3' "${pkgname}")
source=("https://github.com/osxmidi/LinVst3/releases/download/1.8/LinVst3-${pkgver}-Debian-Buster.zip")
sha256sums=('5111ef5a0683267781ae6f943e954d1c1ebb225b886b12f6558aab5397a8d88d')

package() {
	cd "${srcdir}/LinVst3-${pkgver}-Debian-Buster/embedded/"
	for file in *.so; do
        	install -Dm755 $file $pkgdir/usr/bin/$file
	done
	for file in *.exe; do
		install -Dm755 $file $pkgdir/usr/bin/$file
	done
}
