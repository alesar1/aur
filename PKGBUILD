# Contributor: Decrypted Epsilon <decrypted.epsilon@gmail.com>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Maintainer:  Piotr Balwierz <parseByHuman(surname at email_service_of_google)>

pkgname=igv
pkgver=2.5.1
_pkgver=${pkgver//_/-}   # currently not needed
pkgrel=1
pkgdesc="High-performance visualization tool for interactive exploration of large, integrated genomic datasets. From Broad Institute."
arch=('any')
url="http://www.broadinstitute.org/software/igv/home"
license=('LGPL')
depends=('jre-openjdk' 'archlinux-java-run' 'sh')
#"igv-$pkgver.tar.gz::https://github.com/igvteam/igv/archive/v$pkgver.tar.gz"
source=("http://data.broadinstitute.org/igv/projects/downloads/2.5/IGV_Linux_$pkgver.zip"
	#"http://www.broadinstitute.org/software/igv/sites/cancerinformatics.org.igv/files/images/tools.png"
	"$pkgname.sh"
	"igv_hidpi.sh"
	"$pkgname.desktop"
	"igv_hidpi.desktop")
sha512sums=('7933b20d7e06b9c50f8bae9ecc8dd0e9723b887576bb2ccf50358cc53e7ffac19990a79f2ee4f8e6e8b7dbc7e298c037ce8e9781cc8179c7ca7ef1f5ac985d41'
            #'e71a0dc70c717b3db00268632500b5723b8cddb1ecfbd8ce48b77ffad59bf93a8d275cc5ebd18b9eb1025200438ac55ec348def343b1b5f72a2c982b5dc4cc90'
            '70de493d5188d6eedbd0bf7c74d41ce4829efab75e3a79b56f998326c209d0184f5d3624d6b85d01ad93f0462e785c314322ef4a9260ead6d747f1791ecbe649'
            '60c9c8c6f66259a4edafd1d58d1f1ebcda4450f7620d4c0fc987d5875c2fd531bc2a3159fcdb77975bf07002036e3544f4d301a31d1085ab24d576eea1f8adcb'
            'c6bd4fc8bb7e43ee0fe9a4709e716d015c678bdd8bcb897876c267ec48441e2383aebb26b80457d2238f79546537af3409aa698544dc0043ff2c921f18126662'
            '0d52cbd6adc2bf36f8b80acdb6d72b30d52e920b301e7af75ddee8d942c9f3467f7aa98129984ee269c6aaaacc703fb054ba2917e0d7dbce5620050623383e5b')

package() {    
  install -Dm755 $pkgname.sh "$pkgdir"/usr/bin/$pkgname
  install -Dm755 "$pkgname"_hidpi.sh "$pkgdir"/usr/bin/"$pkgname"_hidpi
  install -Dm644 $pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
  install -Dm644 "$pkgname"_hidpi.desktop "$pkgdir"/usr/share/applications/"$pkgname"_hidpi.desktop
  cd IGV_Linux_${_pkgver}
  install -Dm644 IGV_64.png "$pkgdir"/usr/share/pixmaps/$pkgname.png
  install -Dm644 igv.args "$pkgdir"/usr/share/java/$pkgname/igv.args
  install -Dm644 lib/* -t "$pkgdir"/usr/share/java/$pkgname/lib/
}
