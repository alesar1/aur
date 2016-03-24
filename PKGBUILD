# Maintainer: Pavol (Lopo) Hluchy <lopo AT losys DOT eu>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Contributor: Tobias Hunger <tobias DOT hunger AT gmail DOT com>
# Contributor: Stefan Tatschner <stefan@sevenbyte.org>
# Contributor: Caleb Maclennan <caleb@alerque.com>

pkgname=gitlab
pkgver=8.6.0
pkgrel=2
pkgdesc="Project management and code hosting application"
arch=('i686' 'x86_64')
url="http://gitlab.org/gitlab-ce"
license=('MIT')
depends=('ruby2.1' 'git>=2.7.4' 'ruby2.1-bundler>=1.5.2' 'gitlab-shell=2.6.11' 'openssh' 'redis>=2.8' 'libxslt' 'icu' 'nodejs')
makedepends=('cmake')
optdepends=(
	'gitlab-workhorse=0.7.1: for http(s) access'
	'mariadb: database backend'
	'postgresql>=9.1: database backend'
	'mysql>=5.5.14: database backend'
	'python2-docutils: reStructuredText markup language support'
	'postfix: mail server in order to receive mail notifications'
	)
backup=(
	"etc/webapps/${pkgname}/application.rb"
	"etc/webapps/${pkgname}/gitlab.yml"
	"etc/webapps/${pkgname}/database.yml"
	"etc/webapps/${pkgname}/resque.yml"
	"etc/webapps/${pkgname}/unicorn.rb"
	"etc/logrotate.d/${pkgname}"
	)
#source=("$pkgname-$pkgver.tar.gz::https://gitlab.com/gitlab-org/gitlab-ce/repository/archive.tar.gz?ref=v${pkgver}"
source=("$pkgname-$pkgver.tar.gz::https://github.com/gitlabhq/gitlabhq/archive/v${pkgver}.tar.gz"
	gitlab-unicorn.service
	gitlab-sidekiq.service
	gitlab-backup.service
	gitlab-mailroom.service
	gitlab-backup.timer
	gitlab.target
	gitlab.tmpfiles.d
	gitlab.logrotate
	apache.conf.example
	apache-ssl.conf.example
	apache2.2.conf.example
	apache2.2-ssl.conf.example
	nginx.conf.example
	nginx-ssl.conf.example
	lighttpd.conf.example)
install='gitlab.install'
sha512sums=('9d5ad5cb92873a2c0401f68d5e32b8e0cf74aa27943d402f625ea41ea22a882586a6951e3f01f09c7aba324106cc649f62843a322363f98ba160825330550718'
	'5dd7a940eee6a84095478af514dcc98c4fc6c4a214de1ddfa4a1e727d4ba34984d66d51affd7844ffebb75fed8f781b38a0da80fba6a5b8fa832948ab39b2249'
	'2c9d8c650a1808d730bb0f6c45ea8fe2f354d56a5bea1da7eb17dc687ec06b731472af842f4cce0704bf738b5a88001a06e1907d18a35d363e88c4dd6f3e9c7d'
	'c22439ee4cb34adf42de7619a2b83b02359cada38cbe99dd3031e6e72225ec4b2c2d6306331eadfc1c2044609b7a7e8bceddf7be213b5d4dbcaff86b35fe1ce7'
	'ba4266709079f57e4e3d0e37a46e4ba2cac793ce0a4ac18d2edfe0b7fed8104a3a75bdea2997404a8f363b8017f3be2792745bbdaebf0d09cf78f825a56b0928'
	'c11d2c59da8325551a465227096e8d39b0e4bcd5b1db21565cf3439e431838c04bc00aa6f07f4d493f3f47fd6b4e25aeb0fe0fc1a05756064706bf5708c960ec'
	'c519a51d31300074ea12594fbcc8e9610d991ef04b1dac94d93a2b201df3465999cc7c6ac7f3896e02b117c2366d61dea1ef2f6b9cd7b18998385a7f26e5700f'
	'4fe532dabea64189bf25d271cccc11481b22451704e10efac01c7ca4ad76a532fce82088b5eea9546aa80c1141d716820bb23de81c9093dac87f70c94910fb02'
	'a1f52d6ca36b32580062dede23ccdde5633238310b28c6c47deb2ce4496f4e5ffea0de2a49bcb1e0e38fc82b66b0cc91a5e86854716c7e848127769b43eb5067'
	'aebff70d764b16352980ab00a964122a78d57170ff1f8c86687a75770d44de03c9d02009481745c4d68cf30cad6f0158c51a1c47276e73bbc05109948a3a2c26'
	'8025a9d8543b31d57bc54ee3d668ebf8840d4447d8a4ab3ef22597e9ca95f3d3571a71a749ca357670fc09f2c1c4c8cf79d8d603084a4142e7e088bab6dbf99c'
	'e42d4cc00dd2de2c9512c86e977cc50487fde623b33fb020fcf0246679c6401b3fc9cb041b94377d2fcec620623d7726e1757e3a3b9a8871d78dfdc2ddb0151d'
	'b3cf3ac82abb776962ff1151989181f2b678ad07bb4d4c1d88058c0f82f8f5fe5782e76fbb2434efa39775e63657c27329eb62d8940da5f50cadf47275ae9b3e'
	'e2cb969128b91eec6d435954dad3f3d76c6f6467d5a118043d530b7fdcf8657b1724abe406a20fc60702fcae4b5d02a0a3c782dcbc518db436a6c7bf874beb2f'
	'31d0ba225105f43f04befdf01cf8978b0cdfe4900d40e30c9427674b1ef70f534b44a8558a9474ae01b833f68d2e505f45faf9b70fdf2c8898b07cbb293ef779'
	'c78b6f46abcf603d8db6e38cf50868e14145928422ddfe17c88e2f006b5b910dddf456ec5d6d724b250994530643963809688a98f7e12ebd5b5dabf7f96f0e06')

_homedir="/var/lib/${pkgname}"
_datadir="/usr/share/webapps/${pkgname}"
_logdir="/var/log/${pkgname}"
_srcdir="gitlabhq-${pkgver}"
_etcdir="/etc/webapps/${pkgname}"
_wo=()

if [[ `pacman -T libmariadbclient` != '' ]]; then
	_wo+=('mysql')
else
    warning "detected libmariadbclient"
fi
if [[ `pacman -T postgresql-libs` != '' ]]; then
	_wo+=('postgres')
else
    warning "detected postgresql-libs"
fi

prepare() {
	if [[ ${#_wo[@]} == 2 ]]; then
		error "Usable DB libs not found"
		msg2 "Install at least libmariadbclient or postgresql-libs"
		return 1
	fi

	cd "${srcdir}/${_srcdir}"

	# Patching config files:
	msg2 "Patching paths and username in gitlab.yml..."
	sed -e "s|# user: git|user: gitlab|" \
		-e "s|/home/git/repositories|${_homedir}/repositories|" \
		-e "s|/home/git/gitlab-satellites|${_homedir}/satellites|" \
		-e "s|/home/git/gitlab-shell|/usr/share/webapps/gitlab-shell|" \
		-e "s|tmp/backups|${_homedir}/backups|" \
		config/gitlab.yml.example > config/gitlab.yml
	msg2 "Patching paths and timeout in unicorn.rb..."
	sed -e "s|/home/git/gitlab/tmp/.*/|/run/gitlab/|g" \
		-e "s|/var/run/|/run/|g" \
		-e "s|/home/git/gitlab|${_datadir}|g" \
		-e "s|timeout 30|timeout 300|" \
		-e "s|${_datadir}/log/|${_logdir}/|g" \
		config/unicorn.rb.example > config/unicorn.rb
	msg2 "Patching username in database.yml..."
	sed -e "s|username: git|username: gitlab|" \
		config/database.yml.mysql > config/database.yml
	sed -e "s|production: unix:/var/run/redis/redis.sock|production: redis://localhost:6379|" \
		config/resque.yml.example > config/resque.yml
	msg2 "Patching redis_config path"
	sed -i "s|require_relative '../lib/gitlab/redis_config'|require '${_datadir}/lib/gitlab/redis_config'|g" config/application.rb
	sed -i "s|require_relative \"lib/gitlab/redis_config\"|require '${_datadir}/lib/gitlab/redis_config'|g" config/mail_room.yml
	msg2 "setting up systemd service files ..."
	for __srv in gitlab-sidekiq.service gitlab-unicorn.service gitlab.logrotate gitlab.tmpfiles.d gitlab-backup.service gitlab-mailroom.service; do
		sed -i "s|<HOMEDIR>|${_homedir}|g" "${srcdir}/${__srv}"
		sed -i "s|<DATADIR>|${_datadir}|g" "${srcdir}/${__srv}"
		sed -i "s|<LOGDIR>|${_logdir}|g" "${srcdir}/${__srv}"
	done
}

build() {
	cd "${srcdir}/${_srcdir}"

	msg "Fetching bundled gems..."
	# Gems will be installed into vendor/bundle

	bundle-2.1 config build.nokogiri --use-system-libraries
	cpus=$(nproc)
	if [[ $cpus -ge 3 ]]; then
		bundle-2.1 install -j$(( $cpus - 1 )) --no-cache --deployment --without development test aws ${_wo[@]}
	else
		bundle-2.1 install --no-cache --deployment --without development test aws ${_wo[@]}
	fi
}

package() {
	cd "${srcdir}/${_srcdir}"
	install -d "${pkgdir}/usr/share/webapps"
	cp -r "${srcdir}/${_srcdir}" "${pkgdir}${_datadir}"

	# Creating directories
	install -d \
		"${pkgdir}${_etcdir}" \
		"${pkgdir}/usr/share/doc/${pkgname}" \
		"${pkgdir}${_homedir}/www" \
		"${pkgdir}${_homedir}/satellites" \
		"${pkgdir}${_datadir}/www" \
		"${pkgdir}${_homedir}/builds"
	ln -fs /run/gitlab "${pkgdir}${_homedir}/pids"
	ln -fs /run/gitlab "${pkgdir}${_homedir}/sockets"
	ln -fs ${_datadir}/log "${pkgdir}${_homedir}/log"

	ln -fs "${_etcdir}/secret" "${pkgdir}${_datadir}/.secret"

	rm -rf "${pkgdir}${_datadir}/public/uploads" && ln -fs "${_homedir}/uploads" "${pkgdir}${_datadir}/public/uploads"
	rm -rf "${pkgdir}${_datadir}/public/assets" && ln -fs "${_homedir}/assets" "${pkgdir}${_datadir}/public/assets"
	rm -rf "${pkgdir}${_datadir}/builds" && ln -fs "${_homedir}/builds" "${pkgdir}${_datadir}/builds"
	# We are using PrivateTmp=true to start unicorn, so this is safe:
	rm -rf "${pkgdir}${_datadir}/tmp" && ln -fs /var/tmp "${pkgdir}${_datadir}/tmp"
	rm -rf "${pkgdir}${_datadir}/log" && ln -fs "${_logdir}" "${pkgdir}${_datadir}/log"

	ln -fs /etc/webapps/gitlab-shell/secret "${pkgdir}${_datadir}/.gitlab_shell_secret"

	# Install config files
	for _file in application.rb gitlab.yml unicorn.rb database.yml resque.yml; do
		mv "config/${_file}" "${pkgdir}${_etcdir}/"
		[[ -f "${pkgdir}${_datadir}/config/${_file}" ]] && rm "${pkgdir}${_datadir}/config/${_file}"
		ln -fs "${_etcdir}/${_file}" "${pkgdir}${_datadir}/config/"
	done

	# Install license and help files
	mv README.md MAINTENANCE.md CONTRIBUTING.md CHANGELOG config/*.{example,mysql,postgresql} "${pkgdir}/usr/share/doc/${pkgname}"
	install -D "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	rm "${pkgdir}${_datadir}/LICENSE"

	# https://gitlab.com/gitlab-org/gitlab-ce/issues/765
	cp -r "${pkgdir}${_datadir}/doc" "${pkgdir}${_datadir}/public/help"
	find "${pkgdir}${_datadir}/public/help" -name "*.md" -exec rm {} \;
	find "${pkgdir}${_datadir}/public/help/" -depth -type d -empty -exec rmdir {} \;

	# Install systemd service files
	for _file in gitlab-unicorn.service gitlab-sidekiq.service gitlab-backup.service gitlab-backup.timer gitlab.target gitlab-mailroom.service; do
		install -Dm0644 "${srcdir}/${_file}" "${pkgdir}/usr/lib/systemd/system/${_file}"
	done

	install -Dm644 "${srcdir}/gitlab.tmpfiles.d" "${pkgdir}/usr/lib/tmpfiles.d/gitlab.conf"
	install -Dm644 "${srcdir}/gitlab.logrotate" "${pkgdir}/etc/logrotate.d/gitlab"

	# Install webserver config templates
	for __cfg in apache apache-ssl apache2.2 apache2.2-ssl nginx nginx-ssl lighttpd; do
		install -m644 "${srcdir}/${__cfg}.conf.example" "${pkgdir}${_etcdir}"
	done
}

# vim:set ts=4 sw=4 et:
