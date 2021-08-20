# Maintainer: Frederik Schwan <freswa at archlinux dot org>
# Contributor: Frederick Gnodtke <frederick@gnodtke.net>

pkgname=onivim2
pkgver=0.5.6
pkgrel=1
pkgdesc='Native, lightweight modal code editor'
arch=('x86_64')
url='https://github.com/onivim/oni2'
license=('custom:OutrunLabsEULA')
makedepends=('esy' 'ragel' 'nodejs' 'wget' 'bzip2' 'fontconfig' 'fuse2' 'glu' 'gtk3' 'harfbuzz'
              'libglvnd' 'libice' 'libpng' 'libsm' 'libx11' 'libxcursor' 'libxext' 'libxi' 'libxinerama'
              'libxrandr' 'libxt' 'libxxf86vm' 'm4' 'nasm' 'python2' 'clang' 'node-gyp' 'unzip')
options=('!strip')
install='onivim2.install'
source=("https://github.com/onivim/oni2/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
        onivim2.install)
b2sums=('658ad0b24e557a338121c606734065abf0d78c16128cb6b19fe9085ff881d41b0b195089d84e385daf23eef6e33da8c533a917a68485d0acf6861e8fb19c5069'
        'd6e0ad8b9755f1e809d5ffc0a23a5f53455468cfed80a2946f9a1901cc3b31b79250b1b418f6cfffe6f14a521f0eaef3370f06e1babeafb84358e7906becbc44')

# set ESY__PREFIX to avoid 5G of dependency cache ending up in ~/.esy
build() {
  cd oni2-${pkgver}
  export ESY__PREFIX="${srcdir}"/esy_cache
  node install-node-deps.js
  esy install
  esy bootstrap
  esy build
  esy '@release' install
  esy '@release' run -f --checkhealth
  esy '@release' create
}

check() {
  cd oni2-${pkgver}
  export ESY__PREFIX="${srcdir}"/esy_cache
  esy '@bench' install
  esy '@bench' build
  esy '@bench' run
}

package() {
  install -dm755 "${pkgdir}"/opt/onivim2
  install -dm755 "${pkgdir}"/usr/bin/

  cd oni2-${pkgver}/_release/
  install -Dm644 Onivim2.AppDir/EULA.md "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE.txt
  install -Dm644 Onivim2.AppDir/Onivim2.desktop "${pkgdir}"/usr/share/applications/Onivim2.desktop
  install -Dm644 Onivim2.AppDir/Onivim2.png "${pkgdir}"/usr/share/pixmaps/Onivim2.png
  cp -Lr Onivim2.AppDir/{AppRun,usr} "${pkgdir}"/opt/onivim2
  cp -r $(find "${srcdir}"/esy_cache -type d -path '*i/*camomile-opam*/share/camomile') "${pkgdir}"/opt/onivim2/usr/share
  ln -s /opt/onivim2/AppRun "${pkgdir}"/usr/bin/Oni2
  # fix permissions
  find "${pkgdir}" -type f -exec chmod 644 {} \;
  chmod 755 "${pkgdir}"/opt/onivim2/AppRun \
    "${pkgdir}"/opt/onivim2/usr/bin/{Oni2*,node,rg} \
    "${pkgdir}"/opt/onivim2/usr/lib/*
}
