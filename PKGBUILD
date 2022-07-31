pkgname=cef-jetbrains-git
pkgver=98.3.42+gf00e174+chromium+98.0.4758.102
pkgrel=1
pkgdesc="CEF for JetBrains"
arch=('x86_64')
url="https://github.com/JetBrains/cef"
license=('BSD')
depends=('at-spi2-atk' 'libxkbcommon' 'libxcomposite' 'mesa' 'libcups' 'pango' 'libxrandr' 'alsa-lib' 'nss')
makedepends=('python' 'gn' 'ninja' 'clang' 'lld' 'gperf' 'nodejs' 'pipewire'
             'java-runtime-headless' 'git')
# makedepends list is copied from community/chromium
provides=('cef-jetbrains')
conflicts=('cef-jetbrains')
source=('git+https://github.com/JetBrains/cef.git#branch=jb_master'
'pkgver.py')
sha256sums=('SKIP'
            '85b66ad68449b1dec0f59d8fd12c837ad137f3a5b71b254eedc20a14f97590d3')

pkgver() {
    cd $srcdir/cef
    python $srcdir/pkgver.py
}

build() {
    cd $srcdir
    mkdir -p chromium
    mv cef chromium
    cd chromium

    bash cef/jb/tools/common/get_sources.sh x64
    sed -i 's/.*install-build-deps.sh.*/echo/g' cef/jb/tools/linux/create_project.sh
    bash cef/jb/tools/linux/create_project.sh x64
    bash cef/jb/tools/linux/build.sh x64
    bash cef/jb/tools/linux/create_distr.sh x64
}

package() {
    cd $srcdir/chromium/chromium_git/chromium/src/cef/binary_distrib
    mkdir -p $pkgdir/usr/lib/cef-jetbrains
    cp -r $(find . -mindepth 1 -maxdepth 1 -type d)/* $pkgdir/usr/lib/cef-jetbrains/
    mkdir -p $pkgdir/usr/share/licenses/cef-jetbrains
    install -Dm644 ../LICENSE.txt $pkgdir/usr/share/licenses/cef-jetbrains/LICENSE
}
