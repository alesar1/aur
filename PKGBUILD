# Maintainer: sinkuu <sinkuupump@gmail.com>

_install_cron_file=
_install_logrotate_file="y"

pkgname=clamav-unofficial-sigs
pkgver=5.4.1
pkgrel=1
pkgdesc='ClamAV Unofficial Signatures Updater maintained by eXtremeSHOK.com'
arch=('any')
url='https://github.com/extremeshok/clamav-unofficial-sigs'
license=('BSD')
depends=('clamav' 'rsync' 'bind-tools' 'gnupg' 'curl')
source=("https://github.com/extremeshok/clamav-unofficial-sigs/archive/$pkgver.tar.gz"
    'cron'
    'logrotate'
    'clamav-unofficial-sigs.8'
    'clamav-unofficial-sigs.service.patch')
sha256sums=('a6a455086db1ea102d9f714f8604bde1b3bb063c27e5cadd8ca456bf00673538'
            '82d1db1f7f8400d4b5457343a6c6e1c32cffbee06b0f73104c5b11641b58fa74'
            'ad2dee4d8d21483f33f9e95a808c598c98c03014baffa12141ecaefcd2cc3a79'
            '53fe3143db5d422e6306bc9c7ba400976328faaf79cade5f669b48bb1ce6f7bf'
            '227d4e6b7d3611765ed3d8cfdca902ff5a991139babfd4645bdacbb66d3fc416')
backup=('etc/clamav-unofficial-sigs/user.conf')
install='clamav-unofficial-sigs.install'

package() {
    cd "$pkgname-$pkgver"

    patch -p0 < $srcdir/clamav-unofficial-sigs.service.patch

    install -Dm755 clamav-unofficial-sigs.sh "${pkgdir}/usr/bin/clamav-unofficial-sigs.sh"
    install -Dm644 "${srcdir}/clamav-unofficial-sigs.8" "${pkgdir}/usr/share/man/man8/clamav-unofficial-sigs.8"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/clamav-unofficial-sigs/LICENSE"
    install -d -o clamav -g clamav "${pkgdir}/var/lib/clamav-unofficial-sigs"
    install -d -o clamav -g clamav "${pkgdir}/var/log/clamav-unofficial-sigs"

    mkdir -p "${pkgdir}/etc/clamav-unofficial-sigs"
    install -Dm644 config/master.conf "${pkgdir}/etc/clamav-unofficial-sigs/master.conf"
    install -Dm644 config/os.archlinux.conf "${pkgdir}/etc/clamav-unofficial-sigs/os.conf"
    install -Dm644 config/user.conf "${pkgdir}/etc/clamav-unofficial-sigs/user.conf"

    if [ -n "$_install_logrotate_file" ]; then
        install -Dm644 "${srcdir}/logrotate" "${pkgdir}/etc/logrotate.d/clamav-unofficial-sigs"
    fi

    if [ -n "$_install_cron_file" ]; then
        install -Dm644 "${srcdir}/cron" "${pkgdir}/etc/cron.d/clamav-unofficial-sigs"
    fi

    install -d "${pkgdir}/usr/lib/systemd/system"
    install -Dm644 systemd/* "${pkgdir}/usr/lib/systemd/system/"
}
