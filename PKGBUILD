# Maintainer: Eli Schwartz <eschwartz93@gmail.com>
# Contributor: David Mougey <imapiekindaguy at gmail dot com>

pkgname=sigil-git
pkgver=0.8.901.r30.g3959de7
pkgrel=1
pkgdesc="A WYSIWYG ebook editor"
arch=('i686' 'x86_64')
url="https://github.com/Sigil-Ebook/Sigil"
license=('GPL3')
depends=('qt5-webkit' 'hunspell' 'desktop-file-utils' 'minizip'
         'gtk-update-icon-cache' 'python-lxml' 'python-six')
makedepends=('git' 'qt5-tools' 'qt5-svg' 'cmake')
optdepends=('python-html5lib: recommended for plugins'
            'python-chardet: recommended for plugins'
            'python-cssselect: recommended for plugins'
            'python-cssutils: recommended for plugins'
            'python-pillow: recommended for plugins'
            'python-regex: recommended for plugins')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
install=sigil.install
source=("${pkgname%-git}"::"git+${url}")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname%-git}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    mkdir -p "${srcdir}/${pkgname%-git}/build"
    cd "${srcdir}/${pkgname%-git}/build"
    cmake -G "Unix Makefiles" \
        -DUSE_SYSTEM_LIBS=1 \
        -DSYSTEM_LIBS_REQUIRED=1 \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_C_FLAGS:STRING="${CFLAGS}" \
        -DCMAKE_CXX_FLAGS:STRING="${CXXFLAGS}" \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_SKIP_RPATH=ON ..
    make
}

package() {
    cd "${srcdir}/${pkgname%-git}/build"
    make install DESTDIR="${pkgdir}"

    for _pic in 16 32 48 128 256; do
        install -D -m 0644 ../src/Resource_Files/icon/app_icon_${_pic}.png \
            "${pkgdir}"/usr/share/icons/hicolor/${_pic}x${_pic}/apps/sigil.png
    done
}
