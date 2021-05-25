# Maintainer: Alexander Kobel <a-kobel@a-kobel.de>

pkgname=pfufs
pkgver=2.5.0
pkgvernodots=250
pkgrel=1
pkgdesc='Fujitsu fi series Image Scanner Driver for SANE'
url='http://imagescanner.fujitsu.com/global/dl/'
arch=('x86_64')
license=('custom')
depends=('sane')
source=("http://origin.pfultd.com/downloads/IMAGE/fi/ubuntu/${pkgvernodots}/pfufs-ubuntu18.04_${pkgver}_amd64.deb"
        pfufs.pdf::"http://origin.pfultd.com/downloads/IMAGE/fi/ubuntu/${pkgvernodots}/P2U3-0200-04ENZ0.pdf"
        60-pfufs.rules
        pfufs
        pfufs.conf
        pfufs.ini
        pfufsscanbutton.service
        simple-scan.conf)
sha256sums=('70d423ee3b7fdc417d03a32fa5f6b1a310c8417e9ce13348d2322fd68e4de8dd'
            '5ef24dd3a8efaff68ea78002cb2024a43de157f7dffbb387c3df5c108aa293af'
            '116bbb87a658e7a5004c762e5f860897522d8077c5d4d2f2faeb79e7f45d7687'
            '36890d01da19034cfd7f0e8aa40672693cc2b8db2902c6e3755628ee36dd0e61'
            'c5fa4c0a211c69cb4a764cb6dfcc76443d86c1e27469295386db8194eee11f5b'
            'af03606af00cd90726b9d4fd5d7ccad1e1209399b7b668e523eedbf5e7c58521'
            'bd0a75c50f92f66471bb2f3eb969394f0156eae60537a206244bb16f597d2c3d'
            '6aec8ca879208e25ce8678a9bb0ecf11ccecca3c5e82f6e07b25425a261cc732')

prepare () {
  cd "$srcdir"
  tar xf data.tar.gz

  find . -type f -exec chmod 644 '{}' +
  find . -type f -name 'License*' -exec chmod 444 '{}' +
  find . -type f -name 'readme*' -exec chmod 444 '{}' +
  cd opt/pfufs
  chmod 755 bin/* consumables/* etc/pfufssysinfo.sh lib/* pfufsgetinfo/*
}

package () {
  cd "$srcdir"

  install -d "$pkgdir/opt/pfufs/image"

  cp -pR usr/ "$pkgdir/"
  cp -pR opt/pfufs/*/ "$pkgdir/opt/pfufs/"

  install -vDm 444 -t "$pkgdir/usr/share/doc/$pkgname" pfufs.pdf opt/pfufs/readme*.txt
  install -vDm 444 -t "$pkgdir/usr/share/licenses/$pkgname" opt/pfufs/License*.txt

  # from the deb's preinst
  install -vDm 644 -t "$pkgdir/usr/lib/udev/rules.d" 60-pfufs.rules

  install -vDm 644 -t "$pkgdir/usr/lib/systemd/system" pfufsscanbutton.service

  # from the deb's postinst
  install -vDm 644 -t "$pkgdir/etc/sane.d/dll.d" pfufs
  install -vDm 644 -t "$pkgdir/opt/pfufs/etc" pfufs.conf pfufs.ini simple-scan.conf

  install -d "$pkgdir/usr/bin"
  ln -s -t "$pkgdir/usr/bin" /opt/pfufs/consumables/pfufsconsumables
  ln -s -t "$pkgdir/usr/bin" /opt/pfufs/pfufsgetinfo/pfufsgetscerror
  ln -s -t "$pkgdir/usr/bin" /opt/pfufs/pfufsgetinfo/pfufsgetscstatus

  mv "$pkgdir/opt/pfufs/etc" "$pkgdir/etc/pfufs"
  ln -s /etc/pfufs "$pkgdir/opt/pfufs/etc"
}
