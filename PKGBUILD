# Maintainer: Giorgi Kobakhidze <gk@koba.pvt.ge>
# Contributor: Daniel Hahler <archlinux+aur@thequod.de>
# Contributor: Florian Bruhin (The-Compiler) <archlinux.org@the-compiler.org>
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: Sébastien Luttringer <seblu@aur.archlinux.org>
# Contributor: Angel Velasquez <angvp@archlinux.org>
# Contributor: tobias <tobias@archlinux.org>
# Contributor: dibblethewrecker dibblethewrecker.at.jiwe.dot.org

_pkgname=rxvt-unicode
pkgname=rxvt-unicode-patched
pkgver=9.30
pkgrel=1
pkgdesc='Unicode enabled rxvt-clone terminal emulator (urxvt) with fixed font spacing'
arch=('i686' 'x86_64')
url='http://software.schmorp.de/pkg/rxvt-unicode.html'
license=('GPL')
depends=('libxft' 'perl' 'startup-notification' 'rxvt-unicode-terminfo')
optdepends=('gtk2-perl: to use the urxvt-tabbed')
provides=(rxvt-unicode)
conflicts=(rxvt-unicode)
source=(http://dist.schmorp.de/rxvt-unicode/$_pkgname-$pkgver.tar.bz2
        'urxvt.desktop'
        'urxvtc.desktop'
        'urxvt-tabbed.desktop'
        'font-width-fix.patch'
        'line-spacing-fix.patch'
        'https://gist.githubusercontent.com/alexoj/df5bae7a4825cb596581/raw/75a1e75c2ae1ec5c0db68a29f8a6821e9e3d87a5/sgr-mouse-mode.patch'
        'fix-smart-resize-with-x11-frame-borders.patch'  # will be in 9.22+
        )
sha256sums=('fe1c93d12f385876457a989fc3ae05c0915d2692efc59289d0f70fabe5b44d2d'
            '5f9c435d559371216d1c5b49c6ec44bfdb786b12d925d543c286b0764dea0319'
            '91536bb27c6504d6cb0d33775a0c4709a4b439670b900f0c278c25037f19ad66'
            'ccd7c436e959bdc9ab4f15801a67c695b382565b31d8c352254362e67412afcb'
            '1841d774887c4402f9fd431abc54776a914ac7f9d19cb1903035fb2afd6a79c4'
            '686770fe4e8d6bb0ba497ad2e1f217d17515f2544d80abe76496c63ead2bfaa4'
            'd0fb79691ad5bc74bce074ad637fd0d28c093b78908aba7e185fa2acfae668f5'
            '1d1296da4b0b6816871b3eda353e2b736f8d0f046ba3617ebfb689bab3f3c657')
sha512sums=('048d5f635a61bc1a739d5cbc09e7a9f77cee18c81df468ce1ff0a62866ced06fc4ec258bb015d2484a7e7bad2339f0bdd79bd824d649c2553a80bdef9f199e99'
            '7184714a908071a4e8e5c065c5f90255e94dfd072df459c8d6f66fca3647781b3d1f6908b9303bcfd0d5b3f2e3822a8d66efaaa8a7c4d44f6e682839031a6e99'
            'aa501eeeb220ba03b3f101b160230612efbca87694fef88c469b2976d29769c24b34576ea82f6c7941fad6039ac776f32e397add9b957b49bf2e84aeb67b66d6'
            '18c7afb0c3eb8c832893b9ead09d25374b70ae1cd5479a5291d11794906c53daa6f1a1bf698b37efda062bb2b991cacac53a0a6c185ca416b8718fde2bb6a7af'
            'c4e77c7fda94494ccfecad683ec725054dafa4587d2876d5d0817abd87872fda2b18f4a90359c28bb9327b9d69ef76513c2c144533967e0c68c3eb4a4e457dab'
            '77fb097c7fd9f4a49372728002bd73c9eed602ee55906926c11d2a39c08114715df18dc4c0b7e78ba1a2755f207a681a95a2cba1bb5d49d7891fc3b7a5870f05'
            '9c92782b41edf69c7fc70f7d1cefbb9eed699ec78e5fc6db2f51a4f1aa3be583a7d75a09e6e954215a6d433e9530bda34013808dd2eaa1699fac1f21d0b8b9fd'
            '794b5ca17072122f366bd27458891a417ce510d7685240815460d3af4d1161de5808376616d9a990ffeeb091870b3105bcec248e69314833973c801a4400deb3')

prepare() {
  cd $_pkgname-$pkgver

  patch -p0 -i ../font-width-fix.patch
  patch -p0 -i ../line-spacing-fix.patch
  patch -p0 -i ../sgr-mouse-mode.patch
  patch -p1 -i ../fix-smart-resize-with-x11-frame-borders.patch
}

build() {
  cd $_pkgname-$pkgver

  # do not specify --with-terminfo (FS#46424)
  ./configure \
    --prefix=/usr \
    --enable-256-color \
    --enable-combining \
    --enable-fading \
    --enable-font-styles \
    --enable-iso14755 \
    --enable-keepscrolling \
    --enable-lastlog \
    --enable-mousewheel \
    --enable-next-scroll \
    --enable-perl \
    --enable-pointer-blank \
    --enable-rxvt-scroll \
    --enable-selectionscrolling \
    --enable-slipwheeling \
    --enable-smart-resize \
    --enable-startup-notification \
    --enable-transparency \
    --enable-unicode3 \
    --enable-utmp \
    --enable-wtmp \
    --enable-xft \
    --enable-xim \
    --enable-xterm-scroll
  make
}

package() {

  # install freedesktop menu
  for _f in urxvt urxvtc urxvt-tabbed; do
    install -Dm644 $_f.desktop "$pkgdir/usr/share/applications/$_f.desktop"
  done

  cd $_pkgname-$pkgver

  # workaround terminfo installation
  export TERMINFO="$srcdir/terminfo"
  install -d "$TERMINFO"
  make DESTDIR="$pkgdir" install

  # install the tabbing wrapper ( requires gtk2-perl! )
  sed -i 's/\"rxvt\"/"urxvt"/' doc/rxvt-tabbed
  install -Dm 755 doc/rxvt-tabbed "$pkgdir/usr/bin/urxvt-tabbed"
}
