# Maintainer: Gerardo Junior <me@gerardo-junior.com>
# Maintainer: Xaver Hellauer <software@hellauer.bayern>

pkgname=tresorit
pkgver=3.5.952.2250
pkgrel=1
pkgdesc='Encrypted cloud storage for your confidential files. Using Tresorit, files are encrypted before being uploaded to the cloud. Start encrypting files for free.'
arch=('i686' 'x86_64')
url="http://www.tresorit.com/"
install=tresorit.install
license=('custom:tresorit')
depends=(bash libglvnd)
makedepends=('xxd' 'sed')
source=("tresorit_installer_${pkgver}.run::https://installerstorage.blob.core.windows.net/public/install/tresorit_installer.run"
        "https://support.tresorit.com/hc/article_attachments/360009964719/check_signature.sh"
        "tresorit.service")
sha512sums=('28d4a929608866ecf30f5bab6bbb815d3bc384ebb82bb0e018779655ad9fb550b048f20fbfbf06f8872ebcef3b15b0100272dfa5607ea213d8a098b9c0d53720'
            '22f884078f530b20bb91ef3edd8b70fced7ffdcce8904d46249a3d595e9f350f4afb237fc02ae51e383d1fe709362cade7ed4c0105770434fac0e725e7a1059f'
            '58aa3738fd17d5930ed76b9491a3ef0dd481b918f5329b56650e6d77078ad74caeea60c9cf83d524a483a9be7fc41aba2712400922d4ab3db775f1c2a1365765')

prepare() {
  # Validate signature
  sed -i -- "s/tresorit_installer.run/tresorit_installer_${pkgver}.run/g" check_signature.sh
  chmod u+x check_signature.sh
  VERIFICATION_RESULT=`./check_signature.sh`
  echo "$VERIFICATION_RESULT"
  if [ "$VERIFICATION_RESULT" != "Verified OK" ]; then
    echo "    ! Binary signature verification failed"
    exit 1
  fi

  SKIP=`head tresorit_installer_${pkgver}.run | grep "^SKIP" | sed 's/SKIP=//'`
  mkdir -p tresorit
  tail -n+$SKIP tresorit_installer_${pkgver}.run | tar xz -C tresorit
}

package() {
  mkdir -p "${pkgdir}/opt/$pkgname"
  install -Dm755 ../archlinux_user_install "$pkgdir/opt/tresorit/archlinux_user_install"
  install -Dm755 ../systemd_runner "$pkgdir/opt/tresorit/systemd_runner"
  install -Dm644 "$srcdir"/tresorit.service "$pkgdir"/usr/lib/systemd/user/tresorit.service

  if [ $CARCH == "x86_64" ]; then
      cp -r ./tresorit/tresorit_x64/* "$pkgdir/opt/$pkgname"
  else
      cp -r ./tresorit/tresorit_x86/* "$pkgdir/opt/$pkgname"
  fi

  echo "Exec=\$HOME/.local/share/tresorit/tresorit --hidden" >> "${pkgdir}"/opt/tresorit/tresorit.desktop
  echo "Icon=/opt/tresorit/tresorit.png" >> "${pkgdir}"/opt/tresorit/tresorit.desktop

  mkdir -p "${pkgdir}"/usr/share/licenses/tresorit
  ln -s /opt/tresorit/LICENSES.txt \
        "${pkgdir}"/usr/share/licenses/tresorit/LICENSE
}
