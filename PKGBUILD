# Maintainer: Forest Crossman <cyrozap at gmail dot com>

pkgname=greenpak-designer-dev
_pkgver=5.05
_pkgrel=1
pkgver=$_pkgver.$(printf "%03d" $_pkgrel)
pkgrel=1
pkgdesc="GreenPAK1-5 Designer"
arch=('i686' 'x86_64')
url="http://www.silego.com/softdoc/software.html"
license=('custom')
depends=('desktop-file-utils' 'glu' 'graphviz' 'gtk-update-icon-cache' 'libusb' 'qtwebkit' 'shared-mime-info')
options=('!strip')
install=${pkgname}.install

source=("http://www.silego.com/uploads/resources/GP1-5_Designer_v${pkgver}_LNX_Setup.zip")
sha256sums=('1114394668fef7c1a4096037c80af8f8ed7a1c3e080fdbd7cf0fe934fd5ec68f')

if [[ $CARCH == 'i686' ]]; then
  _arch='i386'
elif [[ $CARCH == 'x86_64' ]]; then
  _arch='amd64'
fi

package() {
  # Extract the proper package
  ar p ${pkgname}_${_pkgver}-${_pkgrel}_${_arch}.deb data.tar.xz | \
    tar -xJ --exclude="usr/share/doc-base" --exclude="usr/share/lintian" -C "${pkgdir}"/

  # Shuffle some files
  mv "${pkgdir}"/lib/* "${pkgdir}"/usr/lib/
  rm -r "${pkgdir}"/lib

  # Install license file
  install -dm 755 "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -s "/usr/share/doc/${pkgname}/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/copyright"
  ln -s "/usr/share/doc/${pkgname}/licence.rtf.gz" "${pkgdir}/usr/share/licenses/${pkgname}/license.rtf.gz"
}
