# Maintainer: Andy Bao <contact at andybao dot me>
_pkgname=spacecadetpinball
pkgname=$_pkgname-git
pkgdesc='Reverse engineered port of "3D Pinball for Windows – Space Cadet" to Linux'
pkgver=2.0.1.r5.g8f34829
pkgrel=3
arch=('x86_64' 'i686' 'pentium4' 'aarch64' 'armv7h' 'armv6h')
depends=('sdl2' 'sdl2_mixer')
makedepends=('unrar' 'cmake' 'git')
optdepends=('freepats-general-midi: Soundfont for playing background music')
provides=("$_pkgname")
conflicts=("$_pkgname")
license=('MIT' 'proprietary')
noextract=('Space_Cadet.rar')
url="https://github.com/k4zmu2a/SpaceCadetPinball"
source=(
  'https://archive.org/download/SpaceCadet_Plus95/Space_Cadet.rar'
  "$pkgname::git+$url"
  'spacecadetpinball.desktop'
)
sha256sums=('3cc5dfd914c2ac41b03f006c7ccbb59d6f9e4c32ecfd1906e718c8e47f130f4a'
            'SKIP'
            'SKIP')

prepare() {
  unrar e -y Space_Cadet.rar Space_Cadet/
}

pkgver() {
  cd "$pkgname"
  # cutting off 'Release_' prefix that presents in the git tag
  git describe --long | sed 's/^Release_//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  # -DNDEBUG is required, otherwise you get: "Package contains reference to $srcdir"
  # You can also change -DCMAKE_BUILD_TYPE to "Release" however this goes against Arch packaging guidelines
  LDFLAGS="$LDFLAGS -DNDEBUG" CXXFLAGS="$CXXFLAGS -DNDEBUG" cmake -B "$pkgname/build" -S "$pkgname" \
      -Wno-dev \
      -DCMAKE_BUILD_TYPE=None \
      -DCMAKE_INSTALL_PREFIX=/usr
  make -C "$pkgname/build"
}

package() {
  # Install binary
  install -Dm0755 "$pkgname/bin/SpaceCadetPinball" "$pkgdir/usr/lib/$_pkgname/$_pkgname"
  # Install wrapper script
  install -Dm0755 /dev/stdin "$pkgdir/usr/bin/$_pkgname" <<END
#!/bin/sh

# Configure soundfonts if not already configured
if [ -z "\$SDL_SOUNDFONTS" ]; then
  # Use first available soundfont
  export SDL_SOUNDFONTS="\$(find /usr/share/soundfonts -type f -print -quit 2> /dev/null)"
fi

# Run program in correct directory so it can find it's resources
cd /usr/lib/$_pkgname
exec ./$_pkgname "\$@"
END
  # Install resources
  cd Space_Cadet
  install -m0644 *.DAT *.DOC *.MID *.BMP *.INF *.WAV -t "$pkgdir/usr/lib/$_pkgname"
  cd ..
  # Install icon
  install -Dm0644 "$pkgname/SpaceCadetPinball/Icon_1.ico" "$pkgdir/usr/lib/$_pkgname/icon.ico"
  # Install desktop launcher
  install -Dm644 spacecadetpinball.desktop -t "$pkgdir/usr/share/applications"
}
