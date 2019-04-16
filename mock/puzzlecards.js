import Mock from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/randomOrder': (req, res) => {
    setTimeout(() => {
      // res.status(500);
      // res.json({});
      res.send(
        Mock.mock({
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'setup|1': [
            'Did you hear about the two silk worms in a race?',
            "What happens to a frog's car when it breaks down?"
          ],
          'punchline|1': [
            `It ended in a tie + ${Mock.mock('@string(7, 10)')}`,
            `It gets toad away + ${Mock.mock('@string(7, 10)')}`
          ]
        })
      );
    }, 200);
  }
};
