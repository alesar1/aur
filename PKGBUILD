# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Based on original PKGBUILD by: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>


## The UT dictionary's upstream url: 'http://linuxplayers.g1.xrea.com/mozc-ut.html'


## Helpful internal stuff
_commit=cfd05a0907d4ff95a15cc6fe2d4d56ed480f4002
_mozcver=2.25.4190.102
_utdicdate=20201110
_utdicrel=1
_bldtype=Release

pkgname='emacs-mozc-ut'
pkgver=${_mozcver}.${_utdicdate}
pkgrel=1
pkgdesc='Mozc module for Emacs bundled with the UT dictionary'
arch=('i686' 'x86_64')
url='https://github.com/google/mozc'
license=('custom')
depends=('emacs' 'mozc-ut-common')
makedepends=('clang' 'git' 'gtk2' 'ninja' 'pkgconf' 'python' 'qt5-base')
conflicts=('emacs-mozc' 'emacs-mozc-ut2')
provides=("emacs-mozc=${_mozcver}")
source=("${pkgname}-git::git+https://github.com/google/mozc.git#commit=${_commit}")
sha256sums=('SKIP')

prepare() {
    cd ${pkgname}-git

    git submodule update --init --recursive

    # Avoid build errors (don't use libc++)
    # These should probably be included as options in GYP_DEFINES
    sed -i -e 's/-stdlib=libc++//' src/gyp/common.gypi
    sed -i -e 's/-lc++//' src/gyp/common.gypi
}

build() {
    cd ${pkgname}-git/src

    _targets='unix/emacs/emacs.gyp:mozc_emacs_helper'

    GYP_DEFINES='document_dir=/usr/share/licenses/mozc'

    python build_mozc.py gyp --target_platform=Linux
    python build_mozc.py build -c ${_bldtype} ${_targets}
}

package() {
    cd ${pkgname}-git/src

    install -Dm644 ../LICENSE                                           ${pkgdir}/usr/share/licenses/mozc/emacs-mozc
    install -Dm644 data/installer/credits_en.html                       ${pkgdir}/usr/share/licenses/mozc/emacs-mozc-submodules

    install -Dm755 out_linux/${_bldtype}/mozc_emacs_helper              ${pkgdir}/usr/bin/mozc_emacs_helper
    install -Dm644 unix/emacs/mozc.el                                   ${pkgdir}/usr/share/emacs/site-lisp/mozc.el
}
