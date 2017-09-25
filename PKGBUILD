pkgname=mono-alpha
_pkgname=mono
pkgver=5.4.0.167
pkgrel=8
pkgdesc="Free implementation of the .NET platform including runtime and compiler. Alpha version."
arch=('i686' 'x86_64')
license=('GPL' 'LGPL2.1' 'MPL' 'BSD' 'custom=MITX11' 'custom=MSPL')
url="http://www.mono-project.com/"
depends=('zlib' 'libgdiplus' 'sh' 'python' 'ca-certificates')
makedepends=('cmake' 'mono')
provides=('monodoc' 'mono=${pkgver}')
conflicts=('monodoc' 'mono')
replaces=('mono' 'monodoc')
source=(https://download.mono-project.com/sources/mono/${_pkgname}-${pkgver}.tar.bz2 
	mono.binfmt.d)
md5sums=('103c7a737632046a9e9a0b039d752ee1'
         'b9ef8a65fea497acf176cca16c1e2402')
install="mono.install"

build() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

    # Build mono
  ./autogen.sh --prefix=/usr  \
    --sysconfdir=/etc   \
    --bindir=/usr/bin   \
    --sbindir=/usr/bin    \
    --disable-quiet-build \
    --with-mcs-docs=no
  make

  # Build jay
  cd "${srcdir}"/${_pkgname}-${pkgver}/mcs/jay
  make
}

package() {
  cd "${srcdir}"/${_pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install

  # Install jay
  pushd "${srcdir}"/${_pkgname}-${pkgver}/mcs/jay
  make DESTDIR="${pkgdir}"    \
    prefix=/usr         \
    INSTALL=../../install-sh  \
    install
  popd

    # Install binfmt conf file and pathes
  install               \
    -m644             \
    -D  "${srcdir}"/mono.binfmt.d "${pkgdir}"/usr/lib/binfmt.d/mono.conf

  # Install license
  mkdir \
    -p "${pkgdir}"/usr/share/licenses/"${_pkgname}"

  install   \
    -m644 \
    -D "LICENSE" "${pkgdir}"/usr/share/licenses/"${_pkgname}"/

  # Fix .pc file to be able to request mono on what it depends,
  # fixes #go-oo build
  sed   \
    -i  \
    -e "s:#Requires:Requires:" "${pkgdir}"/usr/lib/pkgconfig/mono.pc
}
