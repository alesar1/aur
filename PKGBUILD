# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Based on original PKGBUILD by: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>


## The UT dictionary's project page: http://linuxplayers.g1.xrea.com/mozc-ut.html


## Helpful internal stuff
_commit=fed70bc909ef2a67d907d1ac89bbcd042d277da5
_mozcver=2.26.4472.102
_utdicver=20210822
_utuserlink=32
_utfilelink=32837

pkgname='mozc-ut-common'
pkgver=${_mozcver}.${_utdicver}
pkgrel=1
pkgdesc='The Open Source edition of Google Japanese Input bundled with the UT dictionary'
arch=('i686' 'x86_64')
url='https://github.com/google/mozc'
license=('custom')
depends=('qt5-base')
makedepends=('bazel' 'git' 'pkgconf' 'python-six')
conflicts=('mozc' 'mozc-ut' 'mozc-ut2' 'mozc-neologd-ut' 'mozc-neologd-ut+ut2' 'mozc-ut-unified' 'mozc-ut-united')
provides=("mozc=${_mozcver}" "mozc-ut=${_mozcver}.${_utdicver}")
source=("${pkgname}-git::git+https://github.com/google/mozc.git#commit=${_commit}"
        "https://osdn.net/downloads/users/${_utuserlink}/${_utfilelink}/mozcdic-ut-${_utdicver}.tar.bz2")
sha256sums=('SKIP'
            '17bc94f0aef77fd15de156fa63226c8ee5e01c65d6b7b6dca98d912f7cabf32d')

prepare() {
    cd ${pkgname}-git

    git submodule update --init --recursive

    # Fix the Qt5 include path
    sed -i -e 's/x86_64-linux-gnu\/qt5/qt/' src/config.bzl

    # Add the UT dictionary
    cat ${srcdir}/mozcdic-ut-${_utdicver}/mozcdic-ut-${_utdicver}.txt >> src/data/dictionary_oss/dictionary00.txt
}

build() {
    cd ${pkgname}-git/src

    env PATH="/usr/lib/jvm/java-11-openjdk/bin/:$PATH" bazel build server:mozc_server gui/tool:mozc_tool --config oss_linux --compilation_mode opt
}

package() {
    install -Dm644 mozcdic-ut-${_utdicver}/COPYING              ${pkgdir}/usr/share/licenses/mozc/ut-dictionary

    cd ${pkgname}-git/src

    install -Dm644 ../LICENSE                                   ${pkgdir}/usr/share/licenses/mozc/mozc
    install -Dm644 data/installer/credits_en.html               ${pkgdir}/usr/share/licenses/mozc/mozc-submodules

    install -Dm755 bazel-bin/server/mozc_server                 ${pkgdir}/usr/lib/mozc/mozc_server
    install -Dm755 bazel-bin/gui/tool/mozc_tool                 ${pkgdir}/usr/lib/mozc/mozc_tool
}
