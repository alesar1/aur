# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>
# Contributor: Jakob Gahde <j5lx@fmail.co.uk>

# NOTICE: This needs Steinberg VST Audio Plug-Ins SDK in ~/SDKs to work.
# It can obtained like this:
# 1. curl -LO http://www.steinberg.net/sdk_downloads/vstsdk360_22_11_2013_build_100.zip
# 2. unzip vstsdk360_22_11_2013_build_100.zip
# 3. mkdir -p ~/SDKs/vstsdk2.4
# 4. cp -va "VST3 SDK/." ~/SDKs/vstsdk2.4

pkgname=radium
pkgver=4.0.8
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
    'qt5-webkit'
    'qt5-x11extras'
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
    'gcc5'
    'boost'
    'llvm'
    'qt5-tools'
)
options=(!strip)
source=("https://github.com/kmatheussen/${pkgname}/archive/${pkgver}.tar.gz"
        "reenable-libbfd-workaround.patch"
        "use-gcc5-for-pluginhost.patch")
md5sums=('24775dcefeec066b2e6e7f105d275877'
         '74ea7a54f0e358035a7f0cc7baf54b6e'
         '9c19006defeef7e317ec23ed8eae1b72')

prepare() {
    cd "${pkgname}-${pkgver}"

    # Fix faust2 compilation on llvm 3.8.1
    sed -i '105s/3.8.0/3.8.0 3.8.1/' "bin/packages/faust2/compiler/Makefile.unix"

    # Fix Qt_instruments compilation
    sed -i '1158s/$/ \$(API)radium_proc.h/' "Makefile.Qt"

    # See https://github.com/kmatheussen/radium/commit/22be69fd24235cafb5878692d574d500f843c911#commitcomment-17394610
    patch -Np1 < "${srcdir}/reenable-libbfd-workaround.patch"
    # Some parts of JUCE that Radium uses depend on unstandardized behaviour
    # specific to GCC5, so they don't compile with Arch's regular GCC6 and we
    # have to switch back manually
    patch -Np1 < "${srcdir}/use-gcc5-for-pluginhost.patch"
}

build() {
    cd "${pkgname}-${pkgver}"
    RADIUM_QT_VERSION=5 make packages
    RADIUM_QT_VERSION=5 BUILDTYPE=RELEASE ./build_linux.sh
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
      --no-same-owner --no-same-permissions --wildcards '*.scm'
}

# vim:set ts=4 sw=4 et:
