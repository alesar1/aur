# Maintainer: Nguyễn Chính Hữu <huupoke12@gmail.com>
# Contributor: emersion <contact@emersion.fr>
# Contributor: ValdikSS <iam@valdikss.org.ru>

pkgname='osu'
pkgver='20210423.2'
pkgrel=1
pkgdesc='A free-to-win rhythm game'
arch=('i686' 'x86_64')
url='https://osu.ppy.sh'
license=('custom')
depends=('wine' 'winetricks' 'lib32-gnutls' 'lib32-libxcomposite' 'lib32-gst-plugins-base-libs')
makedepends=('icoutils')
optdepends=('pipewire-pulse: low-latency audio backend')
source=("${pkgname}-installer-${pkgver}.exe::https://m1.ppy.sh/r/osu!install.exe"
        "${pkgname}-terms.md::https://raw.githubusercontent.com/ppy/osu-wiki/master/wiki/Legal/Terms/en.md"
        "${pkgname}.sh"
        "${pkgname}.desktop"
        "${pkgname}.xml")
sha256sums=('58eff9a415b6d8d46fc8b6bd006dbffb81e545fe964c2d11d337b8f1838fb8a9'
            'SKIP'
            '327ab47237be712e07e2d35ad16dc5c71e23b91d91af0d63e83efd60d977ec68'
            '0a2bb920ba3e8ddc9aa6e1bb2321c748b6efb06189294ccdb59fb1977d7a39b5'
            '85a5f5468a22dad75b8e8cfad8bd0754ed5e4ece693a398de0b90ba1934ac4fe')

build() {
	wrestool -x -t 3 -n 4 -R -o 'osu-stable.png' "${pkgname}-installer-${pkgver}.exe"
	wrestool -x -t 3 -n 15 -R -o 'osu-stable-beatmap.png' "${pkgname}-installer-${pkgver}.exe"
}

package() {
	install -D -m 755 "${pkgname}.sh" "${pkgdir}/usr/bin/osu-stable"
	install -D -m 644 "${pkgname}-installer-${pkgver}.exe" "${pkgdir}/usr/share/${pkgname}/osu-stable-installer.exe"
	install -D -m 644 "${pkgname}-terms.md" "${pkgdir}/usr/share/licenses/${pkgname}/osu-terms.md"
	install -D -m 644 "${pkgname}.xml" "${pkgdir}/usr/share/mime/packages/osu-stable.xml"
	install -D -m 644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/sh.ppy.osu.stable.desktop"
	install -D -m 644 'osu-stable.png' "${pkgdir}/usr/share/icons/hicolor/256x256/apps/osu-stable.png"
	install -D -m 644 'osu-stable-beatmap.png' "${pkgdir}/usr/share/icons/hicolor/256x256/mimetypes/osu-stable-beatmap.png"
}
