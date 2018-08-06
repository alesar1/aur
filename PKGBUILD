# $Id: PKGBUILD 266875 2017-11-15 14:29:11Z foutrelis $
# Maintainer: Alexandre Moine <alexandre@moine.me>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: |AhIoRoS| < ahioros@gmail.com >

pkgname=tuxguitar
pkgver=1.5.2
pkgrel=1
pkgdesc="multitrack guitar tablature editor and player"
arch=('x86_64')
url="http://sourceforge.net/projects/tuxguitar"
license=('LGPL')
depends=('java-runtime>=8' 'alsa-lib' 'gtk2' 'libxtst')
makedepends=('unzip' 'zip' 'apache-ant' 'jack' 'fluidsynth' 'java-environment>=8' 'maven')
optdepends=('fluidsynth')
source=(https://downloads.sourceforge.net/tuxguitar/tuxguitar-$pkgver-src.tar.gz
        nogcj.patch)
sha256sums=('a9ade566752aa0ac72831a1cd0b18b85d302eca7934e2192ad875f51df755981'
            'bda4bc1b864ecfa27392a145854ee3b5ab20876c2d2bc38bbf85f92ce97fe2bc')

case $CARCH in
  i686) _arch=x86;;
  *) _arch=$CARCH;;
esac

prepare() {
  cd tuxguitar-$pkgver-src
  patch -Np1 -i ../nogcj.patch

  # For jdk9
  for _i in `find . -name pom.xml -print`; do
    sed -i 's|<source>1.5</source>|<source>1.6</source>|g' $_i
    sed -i 's|<target>1.5</target>|<target>1.6</target>|g' $_i
  done
  
}

build() {
  export MAVEN_OPTS="$MAVEN_OPTS -Duser.home=$srcdir"
  export JAVA_HOME="/usr/lib/jvm/"`archlinux-java get`

  cd tuxguitar-$pkgver-src
  for _i in . TuxGuitar-{lib,gm-utils} \
    build-scripts/{tuxguitar,native-modules/tuxguitar-{alsa,oss,jack,fluidsynth}}-linux-$_arch
  do (
    cd $_i
    mvn install
  ); done
}

package() {
  # tuxguitar
  cd tuxguitar-$pkgver-src/build-scripts
  install -d "$pkgdir"/usr/share
  cp -a tuxguitar-linux-$_arch/target/tuxguitar-$pkgver-linux-$_arch "$pkgdir"/usr/share/tuxguitar
  cp -a native-modules/tuxguitar-{alsa,oss,jack,fluidsynth}-linux-$_arch/target/build/* \
    "$pkgdir"/usr/share/tuxguitar/

  # icons
  cd ..
  for _i in 16 24 32 48 64 96; do
    _dir="$pkgdir"/usr/share/icons/hicolor/${_i}x${_i}
    install -d "$_dir"/{apps,mimetypes}
    install -m644 TuxGuitar/share/skins/Lavender/icon-${_i}x${_i}.png "$_dir"/apps/tuxguitar.png
    for _m in audio-x-{tuxguitar,gtp,ptb}; do
      ln -sr "$_dir"/apps/tuxguitar.png "$_dir"/mimetypes/$_m.png
    done
  done

  # Misc
  install -Dm644 misc/tuxguitar.xml "$pkgdir"/usr/share/mime/packages/tuxguitar.xml
  install -Dm644 misc/tuxguitar.desktop "$pkgdir"/usr/share/applications/tuxguitar.desktop

  # Launcher
  install -D /dev/stdin "$pkgdir"/usr/bin/tuxguitar <<EOF
#!/bin/sh -e
export SWT_GTK3=0
cd /usr/share/tuxguitar
exec ./tuxguitar.sh -Dorg.eclipse.swt.internal.gtk.cairoGraphics=false "\$@"
EOF
}
