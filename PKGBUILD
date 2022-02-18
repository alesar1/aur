# Maintainer: Timo Sarawinski <timo@it-kraut.net>

_phpbase=80
pkgname=php80-imagick
_name=imagick
pkgver=3.7.0
pkgrel=1
_commit=c5b8086b5d96c7030e6d4e6ea9a5ef49055d8273
pkgdesc="PHP 8.0 extension to create and modify images using the ImageMagick library"
arch=('x86_64')
url="https://github.com/mkoppanen/imagick"
license=('PHP')
depends=('imagemagick' 'ttf-font')
makedepends=("php${_phpbase}" 'librsvg')
checkdepends=('ttf-dejavu')
backup=("etc/php${_phpbase}/conf.d/${_name}.ini")
source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/${_name}/${_name}/archive/refs/tags/${pkgver}.tar.gz"
  "${_name}.ini"
)
sha512sums=('67cf7e76ee59dcf2fbb6230956344033022ea2b93f82fcdb949998638ce9990004948fddf13e7f4649b2115ce6f402a1eb4f95aa36a3b6a26f3f016b0e958bc3'
            '1463505bd6b2572e21f6bbc242c2e0bf8b881b839ac38e38c230f09b4bf4c4698cafba1a026da8f615ee2b2980ab74dc68284afd70bb732db6fb70b5efba2bfc')

prepare() {
  mv -v "${_name}-${pkgver}" "${pkgname}-${pkgver}"
  # setting package version: https://bugs.archlinux.org/task/64185
  sed -e "s/@PACKAGE_VERSION@/${pkgver}/" \
      -i "${pkgname}-${pkgver}/php_imagick.h" "${pkgname}-${pkgver}/package.xml"
  cd "$pkgname-${pkgver}"
  phpize${_phpbase}
}

build() {
  cd "$pkgname-$pkgver"
  ./configure --prefix=/usr --with-php-config=/usr/bin/php-config${_phpbase}
  make
}

check() {
  cd "$pkgname-$pkgver"
  export NO_INTERACTION="true"
  export TEST_PHPDBG_EXECUTABLE="phpdbg${_phpbase}"
  make -k test
}

package() {
  cd "$pkgname-$pkgver"
  make INSTALL_ROOT="$pkgdir/" install
  install -vDm 644 "../${_name}.ini" -t "${pkgdir}/etc/php${_phpbase}/conf.d/"
  install -vDm 644 {ChangeLog,CREDITS,README.md} -t "${pkgdir}/usr/share/doc/${pkgname}/"
  install -vDm 644 examples/*.php -t "${pkgdir}/usr/share/doc/${pkgname}/examples"
}
