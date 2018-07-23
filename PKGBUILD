pkgname=reaper
pkgver=5.94pre5
pkgrel=1
pkgdesc="digital audio workstation"
arch=('x86_64')
url="http://www.reaper.fm"
license=('custom')
depends=('gdk-pixbuf2' 'gtk3' 'jack')
makedepends=('git')
source=("http://www.landoleet.org/${pkgname}${pkgver//.}_linux_x86_64.tar.xz"
	"git+https://github.com/justinfrankel/WDL.git"
	'https://stash.reaper.fm/30638/reaper-desktop-support.zip')
sha256sums=('9f75f9aaac9b2bcfd15aa2dc3d1a34cd9fe4978504a10c1a932c690c3e5b6492'
            'SKIP'
            'c16c8d8d66502852f4948d0c2d3f48f7fd17e598d1f14b05cec54e6cfd8c01b7')

build() {
  cd "${srcdir}/WDL/WDL/swell"
  make
}

package() {
  DESTDIR="${pkgdir}/usr/lib/"
  LICENSEDIR="${pkgdir}/usr/share/licenses/reaper/"
  mkdir -p "${DESTDIR}"
  cp -R "${srcdir}/reaper_linux_x86_64/REAPER/" "${DESTDIR}"
  cp "${srcdir}/WDL/WDL/swell/libSwell.so" "${DESTDIR}/REAPER"
  mkdir "${pkgdir}/usr/bin"
  ln -s /usr/lib/REAPER/reaper5 "${pkgdir}/usr/bin/reaper5"

  install -D -m644 "${srcdir}/reaper_linux_x86_64/REAPER/license.txt" "${LICENSEDIR}/LICENSE"

  # desktop integration
  for file in "${srcdir}"/*.desktop; do
	  sed -i "s#/home/user/pathto#/usr/lib#" $file
	  filename=`basename "${file}"`
	  install -D -m644 "${file}" "${pkgdir}/usr/share/applications/${filename}"
  done

  install -D -m644 cockos-reaper.directory "${pkgdir}/usr/share/desktop-directories/cockos-reaper.directory"
  install -D -m644 cockos-reaper.menu "${pkgdir}/usr/share/menus/applications-merged/cockos-reaper.menu"
  install -D -m644 reaper.png "${pkgdir}/usr/share/icons/hicolor/256x256/apps/reaper.png"
  install -D -m644 reamote.png "${pkgdir}/usr/share/icons/hicolor/256x256/apps/reamote.png"
  install -D -m644 application-x-reaper.xml "${pkgdir}/usr/share/mime/packages/application-x-reaper.xml"
}

