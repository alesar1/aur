# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>
# Contributor: Jakob Gahde <j5lx@fmail.co.uk>
# Contributor: Teteros <teteros -at- opmbx -dot- org>

pkgname=radium
pkgver=4.6.8
pkgrel=1
pkgdesc="A graphical music editor. A next generation tracker."
arch=('i686' 'x86_64')
url="https://users.notam02.no/~kjetism/radium/"
license=('GPL')
depends=(
    'python2'
    'libxaw'
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
    'hicolor-icon-theme'
)
optdepends=('calf-ladspa' 'ladspa-plugins')
makedepends=(
    'cmake'
    'boost'
    'llvm'
    'qt5-tools'
    'libxrandr'
    'steinberg-vst36'
)
options=(!strip)
source=("https://github.com/kmatheussen/${pkgname}/archive/${pkgver}.tar.gz"
        "dont-empty-qt-library-paths.patch"
        "use-system-libxcb.patch"
        "use-system-vstsdk.patch")
md5sums=('6c995f432524cd3de812a3309f66e8f0'
         'd63cea387564fa21dee775e764206a45'
         'd798d5655e2899dc1b54f797d9b2bda3'
         'd068d4bc99360cd4ec933c57ab9f5159')

prepare() {
    cd "${pkgname}-${pkgver}"

    msg2 "Fixing QT_QPA_PLATFORM_PLUGIN_PATH problem"
    patch -Nsp1 < "${srcdir}/dont-empty-qt-library-paths.patch"

    msg2 "Switching to systemd-wide libxcb"
    patch -Nsp1 < "${srcdir}/use-system-libxcb.patch"

    # Use the VST SDK from steinberg-vst36, so the user doesn't have to
    # manually put it into his home directory
    msg2 "Switching to system-wide VST SDK"
    patch -Nsp1 < "${srcdir}/use-system-vstsdk.patch"
}

build() {
    cd "${pkgname}-${pkgver}"

    msg2 "Building packages"
    RADIUM_QT_VERSION=5 make packages

    msg2 "Building Radium"
    RADIUM_QT_VERSION=5 BUILDTYPE=RELEASE ./build_linux.sh
}

package() {
    cd "${pkgname}-${pkgver}"

    msg2 "Installing Radium core files"
    install -dm755 "${pkgdir}/opt/radium"
    # Copy everything from bin except packages
    find "bin" -mindepth 1 -maxdepth 1 -name packages -o -exec cp -a "{}" "${pkgdir}/opt/radium/" \;

    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/radium/radium_linux.bin" "${pkgdir}/usr/bin/radium"

    # Needed to make the Scheme parts of Radium work
    msg2 "Installing s7 sources"
    install -dm755 "${pkgdir}/opt/radium/packages"
    tar -xf "bin/packages/s7.tar.gz" -C "${pkgdir}/opt/radium/packages" \
        --no-same-owner --no-same-permissions --wildcards '*.scm'

    # Radium will complain if these are missing
    msg2 "Installing Faust GUI styles"
    install -Dm644 -t "${pkgdir}/opt/radium/packages/faust2/architecture/faust/gui/Styles" \
        "bin/packages/faust2/architecture/faust/gui/Styles/"*".qss"

    msg2 "Installing .desktop, icon and mimetype files"
    install -dm755 "${pkgdir}/usr/share/applications"
    ln -s "/opt/radium/radium.desktop" \
        "${pkgdir}/usr/share/applications/radium.desktop"

    install -dm755 "${pkgdir}/usr/share/icons/hicolor/"{256x256,128x128,32x32,16x16}"/apps"
    ln -s "/opt/radium/radium_256x256x32.png" \
        "${pkgdir}/usr/share/icons/hicolor/256x256/apps/radium.png"
    ln -s "/opt/radium/radium_128x128x32.png" \
        "${pkgdir}/usr/share/icons/hicolor/128x128/apps/radium.png"
    ln -s "/opt/radium/radium_32x32x24.png" \
        "${pkgdir}/usr/share/icons/hicolor/32x32/apps/radium.png"
    ln -s "/opt/radium/radium_16x16x8.png" \
        "${pkgdir}/usr/share/icons/hicolor/16x16/apps/radium.png"

    install -dm755 "${pkgdir}/usr/share/mime/packages"
    ln -s "/opt/radium/radium-mimetype.xml" \
        "${pkgdir}/usr/share/mime/packages/radium.xml"
}

# vim:set ts=4 sw=4 et:
