# Maintainer: Kyle McLean <kylem590@gmail.com>

pkgname=godot4-mono-bin
pkgver=beta2
pkgrel=1
pkgdesc="Godot Game Engine: An advanced, feature packed, multi-platform 2D and 3D game engine."
arch=('i686' 'x86_64')
url="http://www.godotengine.org"
license=('MIT')
depends=('dotnet-sdk' 'mono' 'msbuild')
source=('godot4-mono.desktop' 'icon.png')
source_i686=($pkgname-$pkgver-32bit.zip::https://downloads.tuxfamily.org/godotengine/4.0/$pkgver/mono/Godot_v4.0-${pkgver}_mono_linux_x86_32.zip)
source_x86_64=($pkgname-$pkgver-64bit.zip::https://downloads.tuxfamily.org/godotengine/4.0/$pkgver/mono/Godot_v4.0-${pkgver}_mono_linux_x86_64.zip)

sha512sums=('0658a4cbd5a5842c1c072eaca25cf243db14251b3b619afff076999ad9104e41e32a444bfbb771992ec9a990d814fcce234ff3c2a416493e5eb3a8d112b85235'
            '3598100251a74a6595ffc002df0adac18c37c9367a4ef148ef7f057d547ed15aaaa07140705d4185394b888c0f5fd8446de35f97625a80d1c3a2132a0418b71e')
sha512sums_i686=('1dd7b6224b7277ff7fe0ae1526461e282c295ed0bf37210cc6d6d0c9568dd969b3e4410f77879b15bc4cdea8a16a218ffc7aa07a45c4a9afacff4ef50bcbd20f')
sha512sums_x86_64=('64382559349ea7a3f058ef71952ba1c819ed21b6b9f978d493cf016529d82029f2a9bde6e338af157209201f9bef04685e63bb7d1b7a7614694e66d844413d34')

package() {
  mkdir -p "$pkgdir/opt/$pkgname"
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/pixmaps"
  mkdir -p "$pkgdir/usr/share/applications"

  case $CARCH in
    "i686")
      cp -r "$srcdir/Godot_v4.0-${pkgver}_mono_linux_x86_32" "$pkgdir/opt/$pkgname/godot4-mono"
      ln -s "/opt/$pkgname/godot4-mono/Godot_v4.0-${pkgver}_mono_linux.x86_32" "$pkgdir/usr/bin/godot4-mono"
    ;;
    "x86_64")
      cp -r "$srcdir/Godot_v4.0-${pkgver}_mono_linux_x86_64" "$pkgdir/opt/$pkgname/godot4-mono"
      ln -s "/opt/$pkgname/godot4-mono/Godot_v4.0-${pkgver}_mono_linux.x86_64" "$pkgdir/usr/bin/godot4-mono"
    ;;
  esac

  cp "$srcdir/godot4-mono.desktop" "$pkgdir/usr/share/applications/godot4-mono.desktop"
  cp "$srcdir/icon.png" "$pkgdir/usr/share/pixmaps/godot4-mono.png"
}
