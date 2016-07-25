# $Id$
# Maintainer: kvaps <kvapss@gmail.com>

pkgname=keepass-wine
pkgver=2.34
pkgrel=1
pkgdesc='A easy-to-use password manager for Windows, Linux, Mac OS X and mobile devices.'
arch=('any')
url='http://keepass.info/'
license=('GPL')
depends=('wine' 'desktop-file-utils' 'xdg-utils' 'shared-mime-info' 'gtk-update-icon-cache')
provides=('keepass')
conflicts=('keepass')
makedepends=('icoutils' 'winetricks')
optdepends=('xdotool: if you want to use auto-type'
            'xsel: clipboard operations')
install="$pkgname.install"
source=("http://downloads.sourceforge.net/keepass/KeePass-$pkgver.zip"
        'keepass'
        'keepass.1'
        'keepass.desktop'
        'keepass.xml'
        'KeePass.ico')

sha256sums=('52dd5a8526cc935b0e240d5ab6402b0b4a3f5f09ad1a6919875878d7f36c697f'
            '666911c06fbe3a8670b5cd841ced50e6c8a7724938280c0ce7ac92262d9406b6'
            'a5fff678466443c0c8256c4771128c86103da47b6a2c49351d9941191b65dd6f'
            '1d5420e8babce5f4bbb3c68bdffe3bc0d3c3be25ad689138cd02fa14edd89140'
            '3d017c17a8788166c644e2460ba3596fd503f300342561921201fe5f69e5d194'
            'd08ebdd9b0a99f6dc4f62bb20d7bb9ce6ab3139fcb31c8830954e16ebbd3d058')

validpgpkeys=('D95044283EE948D911E8B606A4F762DC58C6F98E')

prepare() {
  # Extract icons
  icotool -x KeePass.ico
}

package() {
  install -dm755 "$pkgdir"/usr/bin
  install -dm755 "$pkgdir"/usr/share/keepass/XSL

  install -Dm755 keepass "$pkgdir"/usr/bin/keepass
  install -Dm755 dotnetfx.exe "$pkgdir"/usr/share/keepass/dotnetfx.exe
  install -Dm755 KeePass.exe "$pkgdir"/usr/share/keepass/KeePass.exe
  install -Dm755 KeePass.exe.config "$pkgdir"/usr/share/keepass/KeePass.exe.config
  install -m644 XSL/* "$pkgdir"/usr/share/keepass/XSL
  install -Dm644 keepass.1 "$pkgdir"/usr/share/man/man1/keepass.1

  # Proper installation of .desktop file
  desktop-file-install -m 644 --dir "$pkgdir"/usr/share/applications/ keepass.desktop

  # Install icons
  for size in 16 32 48 256; do
    install -Dm644 \
    KeePass_*_${size}x${size}x32.png \
    "$pkgdir"/usr/share/icons/hicolor/${size}x${size}/apps/keepass.png
  done

  # Needed for postinst with xdg-utils
  install -Dm644 keepass.xml "$pkgdir"/usr/share/mime/packages/keepass.xml

  # Install dotnet
  export WINEPREFIX="$pkgdir"/usr/share/keepass/wine
  export WINEARCH=win32
  export WINEDLLOVERRIDES="mscoree,mshtml="
  winetricks -q dotnet20 dotnet40

  # Set PathExt
  keyname="HKLM\System\CurrentControlSet\Control\Session Manager\Environment"
  valuename="PATHEXT"
  value="$(wine reg query "$keyname" -v "$valuename" | sed 's|\r||g' | awk  '$1 == "PATHEXT" {print $3 ";."}')"
  wine reg add "$keyname" /f /v "$valuename" /t REG_SZ /d "$value"

  # Set Path
  keyname="HKLM\System\CurrentControlSet\Control\Session Manager\Environment"
  valuename="PATH"
  value="$(wine reg query "$keyname" -v "$valuename" | sed 's|\r||g' | awk  '$1 == "PATH" {print $3}')$(echo $(for i in $(echo $PATH | sed 's|:|\n|g') ; do echo -n \;$(winepath -w $i) ; done 2>/dev/null))"
  wine reg add "$keyname" /f /v "$valuename" /t REG_SZ /d "$value"
}
