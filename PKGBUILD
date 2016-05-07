# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>

# NOTICE: This needs Steinberg VST Audio Plug-Ins SDK in ~/SDKs to work.
# It can obtained like this:
# 1. curl -LO http://www.steinberg.net/sdk_downloads/vstsdk360_22_11_2013_build_100.zip
# 2. unzip vstsdk360_22_11_2013_build_100.zip
# 3. mkdir -p ~/SDKs/vstsdk2.4
# 4. cp -va "VST3 SDK/." ~/SDKs/vstsdk2.4

pkgname=radium
pkgver=3.8.3
pkgrel=1
pkgdesc="A graphical music editor. A next generation tracker."
arch=('i686' 'x86_64')
url="http://users.notam02.no/~kjetism/radium/"
license=('GPL')
depends=(
    'python2'
    'libxaw'
    'libsndfile'
    'libsamplerate'
    'liblrdf'
    'qt4'
    'libxkbfile'
    'glu'
    'speex'
    'fftw'
    'jack'
    'libxinerama'
    'libxcursor'
)
makedepends=(
    'cmake'
    'boost'
)
options=(!strip)
source=("https://github.com/kmatheussen/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('b5863a9d6150791a452aba932f7bf57b')

build() {
    cd "${pkgname}-${pkgver}"
    make packages
    BUILDTYPE=RELEASE ./build_linux.sh
}

package() {
    cd "${pkgname}-${pkgver}"

    mkdir -p "${pkgdir}/opt/radium"
    mkdir -p "${pkgdir}/usr/bin"
    cp -va "bin/." "${pkgdir}/opt/radium/"
    ln -s "/opt/radium/radium" "${pkgdir}/usr/bin/radium"

    # Remove objects created during packages compilation.
    rm -rf "${pkgdir}/opt/radium/packages"

    # Restore s7 sources - needed to make the Scheme parts of Radium work
    mkdir -p "${pkgdir}/opt/radium/packages"
    tar -xvf "bin/packages/s7.tar.gz" -C "${pkgdir}/opt/radium/packages" \
      --no-same-owner --no-same-permissions
}

# vim:set ts=4 sw=4 et:
