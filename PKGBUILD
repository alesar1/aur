# Maintainer: Shalygin Konstantin (k0ste@cn.ru)

pkgname='ivideon-server-headless'
pkgver='3.5.4'
pkgrel='685'
_rel='03f8089c25ed'
pkgdesc='Ivideon-server daemon'
arch=('x86_64')
url=('http://ivideon.com/')
license=('freeware')
depends=('portaudio' 'gstreamer0.10' 'gstreamer0.10-base-plugins' 'gstreamer0.10-good-plugins')
makedepends=('libarchive')
conflicts=('ivideon-video-server-nogui')
source=("https://packages.ivideon.com/ubuntu/pool/non-free/i/${pkgname}/${pkgname}_${pkgver}-${pkgrel}~${_rel}_amd64.deb"
	"videoserverd.service"
	"videoserverd.conf"
	"sysusers.conf"
	"schedule.json")
sha256sums=(	"8fa1d7e3e54050b96b72dde997957fec7b60c6d1b093a5ec7020ace8a6da1165"
		"48cd5beedc9992a26448ee06c44460c8e9f3014154adcad0eee39aa985851071"
		"f0010bc64cd7c1b5aefcc7241f0e0074528aec1a4b51dd08bd429e95acd26012"
		"91c4b133ad4d1fda72679ab393b647ac24a56e3c0d46cd2a908a47ed8524ec81"
		"d02f782328766ee982584c46c2d15180c441468d2ef27532142e7d6b951b830a")
install="videoserverd.install"
backup=("etc/videoserverd.conf"
	"var/lib/videoserverd/schedule.json")

build() {
  cd "${srcdir}"
  bsdtar xf "data.tar.gz"
  rm "opt/ivideon/ivideon-server/init_ctl.sh"
  rm "opt/ivideon/ivideon-server/initd.sh"
  rm "opt/ivideon/ivideon-server/serverctl.sh"
}

package() {
  pushd ${srcdir}
  cp -ax "opt" "${pkgdir}"
  install -Dm644 "videoserverd.service" "${pkgdir}/usr/lib/systemd/system/videoserverd.service"
  install -Dm644 "videoserverd.conf" "${pkgdir}/etc/videoserverd.conf"
  install -Dm644 "sysusers.conf" "${pkgdir}/usr/lib/sysusers.d/videoserverd.conf"
  install -Dm644 -o 176 -g 176 "schedule.json" "${pkgdir}/var/lib/videoserverd/schedule.json"
  install -dm755 -o 176 -g 176 "${pkgdir}/run/videoserverd"
  install -dm775 -o 176 -g 176 "${pkgdir}/var/log/videoserverd"
  install -dm775 -o 176 -g 176 "${pkgdir}/var/lib/videoserverd"
  popd
}
