# Maintainer: Det
pkgname=beyond-compare
pkgver=4.1.6
_build=21095
pkgrel=1
pkgdesc="Compare files and folders, merge changes, synchronize files, and generate reports"
arch=('i686' 'x86_64')
url="http://www.scootersoftware.com"
license=('non-free')
depends=('desktop-file-utils' 'gdk-pixbuf2' 'gtk2' 'qt4')
optdepends=('dolphinpart4: for use with KDE4 Dolphin'
            'nautilus: for use with GNOME Nautilus'
            'thunar: for use with Xfce Thunar'
            'nemo: for use with Cinnamon Nemo'
            'caja: for use with MATE Caja')
options=('!strip')
install=$pkgname.install
source=('LICENSE')
source_i686=("$url/bcompare-${pkgver}.${_build}_i386.deb")
source_x86_64=("$url/bcompare-${pkgver}.${_build}_amd64.deb")
md5sums=('9eeda8a80922a529bd3a8db7a03ad8b0')
md5sums_i686=('2aeca1aed68b030d8e07be02635cd686')
md5sums_x86_64=('86e75f23eba079d2348f3277f3786c8f')

package() {
  # Extract archive
  msg "Extracting the data.tar.gz..."
  bsdtar -xf data.tar.gz -C "$pkgdir/"

  # Main install
  msg2 "Moving files..."
  install -d "$pkgdir"/opt
  mv "$pkgdir"/usr/lib/beyondcompare/ "$pkgdir"/opt/$pkgname/

  # Architecture
  _arch=amd64
  [[ $CARCH = i686 ]] && _arch=i386

  ## File manager plugins
  msg2 "Installing file manager plugins..."
  # Dolphin
  install -Dm755 "$pkgdir"/opt/$pkgname/ext/bcompare_ext_kde.$_arch.so \
           "$pkgdir"/usr/lib/kde4/bcompare_ext_kde.so
  # .desktop for Dolphin
  install -Dm644 "$pkgdir"/opt/$pkgname/ext/bcompare_ext_kde.desktop \
           "$pkgdir"/usr/share/kde4/services/bcompare_ext_kde.desktop
  # Nautilus
  install -Dm755 "$pkgdir"/opt/$pkgname/ext/bcompare-ext-nautilus.$_arch.so \
           "$pkgdir"/usr/lib/nautilus/extensions-3.0/bcompare-ext-nautilus.so 
  # Thunar
  install -Dm755 "$pkgdir"/opt/$pkgname/ext/bcompare-ext-thunarx.$_arch.so \
           "$pkgdir"/usr/lib/thunarx-2/bcompare-ext-thunarx.so
  # Nemo
  install -Dm755 "$pkgdir"/opt/$pkgname/ext/bcompare-ext-nemo.$_arch.so \
          "$pkgdir"/usr/lib/nemo/extensions-3.0/bcompare-ext-nemo.so 
  # Caja
  install -Dm755 "$pkgdir"/opt/$pkgname/ext/bcompare-ext-caja.$_arch.so \
           "$pkgdir"/usr/lib/caja/extensions-2.0/bcompare-ext-caja.so

  # License
  install -Dm644 LICENSE \
           "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

  # Directory location
  msg2 "Fixing main directory location..."
  sed "s|BC_LIB=.*|BC_LIB=/opt/$pkgname|" \
    -i "$pkgdir"/usr/bin/bcompare

  # Remove redundancies
  msg2 "Removing redundancies..."
  rm -r "$pkgdir"/opt/$pkgname/ext/
  rm -r "$pkgdir"/usr/share/mime/
  rm    "$pkgdir"/opt/$pkgname/GPG-KEY-scootersoftware
  rm    "$pkgdir"/opt/$pkgname/scootersoftware.list
  
  # Fix permissions
  msg2 "Fixing directory permissions..."
  find "$pkgdir" -type d -exec chmod 755 {} +
}
