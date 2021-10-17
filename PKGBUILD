# Maintainer : silverhikari
# Contributor: Elijah Gregg <lovetocode999@ctrl-c.club>
# Contributor: Alexandros Theodotou <alex@zrythm.org>
pkgname=zrythm-git
pkgver=1.0.0.alpha.25.1.22.r17.g4a9418d69
pkgrel=1
epoch=1
pkgdesc='a highly automated and intuitive digital audio workstation'
arch=('x86_64' 'i686')
url="https://www.zrythm.org"
license=('AGPL3')
depends=('gtk3' 'lilv' 'libx11' 'jack' 'libsndfile' 'libyaml' 'libsamplerate' 'alsa-lib' 'fftw'
         'suil' 'breeze-icons' 'lv2' 'rubberband' 'python-sphinx-furo' 'python-sphinx-copybutton' 'python-sphinxcontrib-svg2pdfconverter'
         'xxhash' 'vamp-plugin-sdk' 'carla-git')
makedepends=('ruby-sass' 'python' 'gettext' 'sed' 'python-sphinx-intl'
             'meson' 'ninja' 'help2man' 'python-sphinx'
             'ladspa' 'lv2' 'gtksourceview3' 'cmake')
optdepends=('portaudio: portaudio backend'
            'qt5-base: for embedding qt5 plugin UIs')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
options=('!strip')
source=("zrythm::git+https://git.zrythm.org/zrythm/zrythm.git")
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/${pkgname%-git}"

    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/${pkgname%-git}"
    meson build --prefix=/usr -Denable_tests=true -Dmanpage=true -Dcarla=enabled
    ninja -C build
}

check() {
    cd "$srcdir/${pkgname%-git}"
    ninja -C build test
}

package() {
    cd "$srcdir/${pkgname%-git}"
    install -vDm 644 AUTHORS CONTRIBUTING.md CHANGELOG.md README.md THANKS TRANSLATORS \
        -t "${pkgdir}/usr/share/doc/${pkgname}/"
    DESTDIR="${pkgdir}/" ninja -C build install
}
