# Maintainer: Mike Swanson <mikeonthecomputer@gmail.com>

pkgname=chocolate-doom
pkgdesc="Historically-accurate Doom, Heretic, Hexen, and Strife ports."
pkgver=3.0.0
pkgrel=6
arch=('i686' 'x86_64' 'aarch64')
url="http://www.chocolate-doom.org/"
license=('GPL2')
install=chocolate-doom.install
depends=('libpng' 'libsamplerate' 'sdl2_mixer' 'sdl2_net')
makedepends=('python')
optdepends=('freedm: Free deathmatch game'
            'freedoom1: Free Ultimate Doom-compatible game'
            'freedoom2: Free Doom II-compatible game')
conflicts=(chocolate-common
           chocolate-heretic
           chocolate-hexen
           chocolate-strife)
replaces=(${conflicts[@]})
source=(https://www.chocolate-doom.org/downloads/${pkgver}/${pkgname}-${pkgver}.tar.gz{,.asc}
        0001_fix-bash-completion.patch
        0002-Remove-redundant-demoextend-definition.patch)
b2sums=('11989b4b4458098af63c4b89a73552a8bb43c22077d358770b0e89e1b816950b92630592dcb5b4a782ccf673951b7e3d8503bc517577fe59d052d8b4f3f125e1'
        'SKIP'
        '15115b4450f978b6ce2c593ec3d7d54d6acc1082b64b1fb0db155187366595563291991d19840534a43d966bf4722954e652b3cb3e9961d5ad6827c3651c0908'
        'eefc539dd87472323be368073ac2893f41a0ce478d12a288bb1b85513f1491b013fcdfcac94db92e444fe89798ffb06a0441e016f78cf533221fffc9e1f69507')
validpgpkeys=('6D2C117E0310664497AA9546F6C2EE9C23354344')

prepare() {
  cd "${pkgbase}-${pkgver}"

  for patch in ../*.patch; do
    if [ ! -f "$patch" ]; then
      break;
    else
      patch -p1 -i "$patch"
    fi
  done
}

build() {
  cd "${pkgbase}-${pkgver}"

  ./configure --prefix=/usr
  make
}

package() {
  cd "${pkgbase}-${pkgver}"

  make DESTDIR="${pkgdir}" install
  install -dm 755 "${pkgdir}"/usr/share/games/doom

  # dedup all the *setup programs, make desktop file work
  rm "${pkgdir}"/usr/bin/chocolate-{heretic,hexen,strife}-setup
  mv "${pkgdir}"/usr/bin/chocolate-doom-setup "${pkgdir}"/usr/bin/chocolate-setup
  ln -s chocolate-setup "${pkgdir}"/usr/bin/chocolate-doom-setup
  ln -s chocolate-setup "${pkgdir}"/usr/bin/chocolate-heretic-setup
  ln -s chocolate-setup "${pkgdir}"/usr/bin/chocolate-hexen-setup
  ln -s chocolate-setup "${pkgdir}"/usr/bin/chocolate-strife-setup
}
