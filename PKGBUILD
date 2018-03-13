# Maintainer: Xaver Hellauer <software@hellauer.bayern>

pkgname=tresorit
pkgver=3.0.509.751
pkgrel=1
pkgdesc='Encrypted cloud storage for your confidential files. Using Tresorit, files are encrypted before being uploaded to the cloud. Start encrypting files for free.'
arch=('i686' 'x86_64')
url="http://www.tresorit.com/"
install=tresorit.install
license=('custom:tresorit')
depends=(bash libglvnd)
makedepends=('xxd')
source=("tresorit_installer_${pkgver}.run::https://installerstorage.blob.core.windows.net/public/install/tresorit_installer.run"
        "tresorit.service")

sha512sums=('1b2ed3afc85434a36bbc6c584b6aab3cc259814167ba228efa467f44ec33c98452796a176e08750a6eaf44171ce2378c1c998743588cc155b2a9944a2094b2f4'
            '58aa3738fd17d5930ed76b9491a3ef0dd481b918f5329b56650e6d77078ad74caeea60c9cf83d524a483a9be7fc41aba2712400922d4ab3db775f1c2a1365765')

prepare() {
  # Validate signature
  head -c1044 tresorit_installer_${pkgver}.run | tail -c+20 | xxd -r -p > tresorit_installer_${pkgver}.run.signature
  VERIFICATION_RESULT=`tail -c+1046 tresorit_installer_${pkgver}.run | openssl sha512 -verify ../tresorit_installer.run.pubkey -sigopt rsa_padding_mode:pss -sigopt rsa_pss_saltlen:-1 -signature tresorit_installer_${pkgver}.run.signature`
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
