import { Box, Grid, Link, Typography } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import JCIOT from '../../resource/icons/jciot.svg';
import JCUT from '../../resource/icons/jcut.svg';
import JcutDark from '../../resource/icons/jcut-dark.svg';
import { useTheme } from '@mui/material';

export default () => {
  const theme = useTheme();
  const JCUTIcon = theme.palette.mode === 'light' ? JCUT : JcutDark;

  return (
    <Box sx={{ px: { xs: 4, sm: 8 }, py: 6 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        rowSpacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            columns={2}
            rowSpacing={2}
            columnSpacing={8}
          >
            <Grid item xs={2} md={1}>
              <Box maxWidth={520}>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    荆楚理工学院开源镜像站是一个致力于助力开发者开发，方便荆楚校内外师生高效访问开源资源的非盈利计划。
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    本站由荆楚理工学院信息化办公室支持创办
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    由JCIOT团队开发运行维护，感谢团队成员YangFan,ZhaoYinghao为本站建设作出的贡献
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    本站基于浙江大学ZJUSCT开源的mirror-front与清华大学TUNA开源的tunasync项目，感谢ZJUSCT与TUNA为国内开源生态作出的伟大贡献
                    除特殊注明外，本站源码在 Apache License 2.0 许可下发布，本站创作内容均在 CC BY-NC-SA 4.0 许可下发布，相关源码及创作内容可在 GitHub 获取。
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Link
                    href="https://github.com/ZJUSCT/mirror-issues"
                    color="text.secondary"
                    underline="hover"
                  >
                    <Trans>问题反馈与镜像请求（GitHub）</Trans>
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Trans>根据相关法律法规，本站部分内容仅对校内用户提供服务。</Trans>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} md={1}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                columnSpacing={8}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    <Trans>关于我们-JCIOT团队</Trans>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="mailto:mirrors@zju.edu.cn"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>Email</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://github.com/zjusct"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>GitHub</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://www.zjusct.io"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>Blog</Trans>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    <Trans>特别鸣谢</Trans>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="http://zuits.zju.edu.cn"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>荆楚理工学院信息化办公室</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://tuna.moe"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>清华大学 TUNA 协会</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://mirrorz.org/"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>中国教育网 MirrorZ 镜像站项目</Trans>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" columnSpacing={4} rowSpacing={2} alignItems="center">
            <Grid item>
              <Link href="https://zuits.zju.edu.cn/">
                <JCUT width="16rem"/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.zjusct.io">
                <JCUTIcon width="12rem"/>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
